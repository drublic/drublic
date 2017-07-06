(function ($) {
  var getLink = function (item) {
    return '<a href="#' + item.url + '">' + item.title + '</a>';
  };

  var generateUl = function (tree) {
    var list = '<ul>';

    tree.forEach(function (item) {
      list += '<li>';
      list += getLink(item);

      if (item.children && item.children.length > 0) {
        list += generateUl(item.children);
      }

      list += '</li>';
    });

    list += '</ul>'

    return list;
  };

  var generateToc = function ($element) {
    var tree = [];
    var $article = $element.parent();
    var $headlines = $article.find('h2, h3, h4');

    $headlines.each(function (index, element) {
      var $element = $(element);
      var title = $element.text();
      var url = title.replace(/\s/g, '-').replace(/\?|\!|\.|\:|\,/g, '').toLowerCase();
      var dataElement;

      var data = {
        title: title,
        url: url,
        children: []
      };

      if ($element[0].tagName === 'H2') {
        dataElement = data;
      } else if ($element[0].tagName === 'H3') {
        dataElement = tree.slice(-1).pop();

        if (dataElement && dataElement.children) {
          dataElement.children.push(data);
          tree.splice(-1, 1);
        }

      } else if ($element[0].tagName === 'H4') {
        var parent = tree.slice(-1).pop();

        if (parent && parent.children) {
          dataElement = parent.children.slice(-1).pop();

          if (dataElement && dataElement.children) {
            dataElement.children.push(data);
            parent.children.splice(-1, 1);
            parent.children.push(dataElement);
            tree.splice(-1, 1);

            dataElement = parent;
          }
        }
      }

      if (dataElement) {
        tree.push(dataElement);

      }

      $element.attr('id', url);
    });

    $element
      .append('<h2>Table of Contents</h2>')
      .append(generateUl(tree));
  };

  generateToc($('[data-toc]'));
}(jQuery));
