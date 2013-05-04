<?php

	class Posts {

		private $posts = array();
		private $posts_folder = '../posts/';

		public function __construct () {
			$this->get_all_posts();
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

		protected function get_all_posts () {
			$dirHandle = opendir($this->posts_folder);

			while ($file = readdir($dirHandle)) {
				if (is_dir($this->posts_folder . $file) && $file != '.' && $file != '..') {
					$this->posts[] = new Post($this->posts_folder . $file . '/');
				}
			}
		}
	}
