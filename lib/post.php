<?php

	use \Michelf\Markdown;

	class Post {

		private $folder;
		private $metafile = 'meta.json';
		private $metadata;
		private $contentfile = 'article.md';

		public function __construct ($folder) {
			$this->__set('folder', $folder);

			$this->parse_meta();
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

		// Get all meta-data for post
		protected function parse_meta () {
			$file = $this->folder . $this->metafile;

			if (!file_exists($file)) {
				throw new Exception('File ' . $file . ' does not exist.');
			}

			$filecontent = file_get_contents($file);

			$this->metadata = json_decode($filecontent);
		}

		public function title () {
			return $this->metadata->title;
		}

		public function author () {
			return $this->metadata->author;
		}

		public function author_url () {
			return $this->metadata->author_url;
		}

		public function url () {
			return $this->metadata->url;
		}

		public function internal_url () {
			return $this->metadata->internal_url;
		}

		public function date ($format) {
			return $this->metadata->date;
		}

		public function content () {
			$file = $this->folder . $this->contentfile;

			if (!file_exists($file)) {
				throw new Exception('File ' . $file . ' does not exist.');
			}

			$filecontent = file_get_contents($file);

			return Markdown::defaultTransform($filecontent);
		}

		public function is_linked_post () {
			return false;
		}
	}
