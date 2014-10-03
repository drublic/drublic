<?php
	date_default_timezone_set('Europe/Berlin');


	$page_action = trim($_GET['file'], '/');

	$environment = ($_SERVER['HTTP_HOST'] == 'drublic.de') ? 'production' : 'dev';

	// When no file is requested, use index method
	if (empty($page_action)) {
		$page_action = 'index';
	}


	// Generate base url
	function base_url ($print = true) {
		global $environment;

		if ($environment == 'dev') {
			$base = '//drublic.local/';
		} else {
			$base = '//drublic.de/';
		}

		if ($print) {
			print $base;
			return;
		}

		return $base;
	}


	// Return the current file path
	// @return string file path
	function get_file_path () {
		global $page_action;

		// Get properties of current page
		$page = get_page_properties();

		// Load error page when action does not exist
		if (empty($page)) {
			$file = 'content/error.html';
		} else {
			$file = $page->content;
		}

		// If file exists
		if (file_exists('../src/' . $file)) {
			return '../src/' . $file;
		}
	}


	// Convenience function to provide package data (like version)
	function read_package () {
		$file = file_get_contents(dirname(__FILE__) . '/../package.json');
		return json_decode($file);
	}

	// Set package
	$package = read_package();

	// Convenience function to provide strucure data
	function read_structure () {
		$file = file_get_contents(dirname(__FILE__) . '/../structure.json');
		return json_decode($file);
	}

	// Set stucture
	$structure = read_structure();

	// Convenience function to return page properies for action
	// @param $action
	// @return object with page structure or NULL
	function get_page_properties () {
		global $structure, $page_action;

		// Check if action is allowed
		for ($i = 0; $i < count($structure); $i++) {
			if ($structure[$i]->action == $page_action) {
				return $structure[$i];
			}
		}

		// If action isn't available, return NULL
		return NULL;
	}


	// Function to return the title
	function get_page_title ($print = true) {
		global $page_action;

		// Get properties of current page
		$page = get_page_properties($page_action);

		if (empty($page)) {
			$title = 'Not Found';
		} else {
			$title = $page->title;
		}

		if ($print) {
			print $title;
		} else {
			return $title;
		}
	}


	// Function to activate current navigation item
	function set_navigation_item_active ($action, $print = true) {
		global $page_action;

		if ($action == $page_action) {
			if ($print) {
				print ' class="is-active"';
			} else {
				return true;
			}
		}
	}

	// send Header if necessary
	function set_headers () {
		$page = get_page_properties();

		// Send 404 if empty
		if (empty($page)) {
			header('HTTP/1.0 404 Not Found');
		}
	}


	// Build page
	set_headers();

	include('../src/templates/header.html');
	include(get_file_path());
	include('../src/templates/footer.html');
