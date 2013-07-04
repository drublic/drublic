<?php

	class Post {

		private $folder;
		private $folder_prefix = '../content/blog/';
		private $contentfile = '/article.html';

		public function __construct ($postmeta) {
			$this->folder = $postmeta->permalink;
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

		public function content () {
			$file = $this->folder_prefix . $this->folder . $this->contentfile;

			if (!file_exists($file)) {
				throw new Exception('File ' . $file . ' does not exist.');
			}

			$filecontent = file_get_contents($file);

			return $filecontent;
		}

		public function is_linked_post () {
			return false;
		}
	}
