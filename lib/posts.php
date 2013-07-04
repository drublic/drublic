<?php

	class Posts {

		private $page = 1;
		private $postcount = 10;
		private $posts = array();
		private $paginated_posts = array();
		private $posts_folder = '../blog/';

		public function __construct ($page, $postcount) {
			$this->__set('page', $page);
			$this->__set('postcount', $postcount);

			$this->get_all_posts();
			$this->filter_posts();
		}

		// Generic getter and setter
		public function __get($property) {
			if (property_exists($this, $property)) {
				return $this->$property;
			}
		}

		public function __set($property, $value) {
			if (property_exists($this, $property)) {
				$this->$property = $value;
			}

			return $this;
		}

		// Convenience function to provide read post meta
		protected function read_posts () {
			$file = file_get_contents(dirname(__FILE__) . '/../posts.json');
			return json_decode($file);
		}

		protected function sort_by_date () {
			$posts = $this->posts;

			$dates = array();
			$unsortedPosts = array();
			$sortedPosts = array();

			foreach ($posts as $post => $data) {
				$dates[] = $data->date;
				$unsortedPosts[$data->date] = $data->permalink;
			}

			sort($dates);

			foreach ($dates as $date) {
				$sortedPosts[$date] = $unsortedPosts[$date];
			}

			return $sortedPosts;
		}

		protected function get_all_posts () {

			// Get posts
			$this->__set('posts', $this->read_posts());

			// Sort them
			return $this->sort_by_date();
		}

		protected function filter_posts () {
			$start = ($this->page - 1) * ($this->postcount - 1);
			$end = $start + $this->pagecount;

			for ($i = $start; $i <= $end; $i++) {
				$this->paginated_posts[] = new Post($this->posts[$i]);
			}
		}

		public function pagecount () {
			$pages = count($this->posts) / $this->postcount;

			if ($pages < 1) {
				return 1;
			}

			return ceil($pages);
		}
	}
