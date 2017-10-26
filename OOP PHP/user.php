<?php

class user{
	var $user;
	var $name;
	var $lastname;

	function set_user($user){
		$this->user=$user;
	}

	function get_user(){
		return $this->user;
	}

	function set_name($name){
		$this->name=$name;
	}

	function get_name(){
		return $this->name;
	}

	function set_last($last){
		$this->lastname=$last;
	}

	function get_last(){
		return $this->lastname;
	}
}
?>