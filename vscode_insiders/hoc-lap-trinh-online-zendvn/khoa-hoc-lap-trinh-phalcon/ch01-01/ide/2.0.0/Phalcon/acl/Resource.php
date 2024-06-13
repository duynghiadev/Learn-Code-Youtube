<?php

namespace Phalcon\Acl;

class Resource
{
    /**
     * Resource name
     *
     * @var string
     */
    protected $_name;

    /**
     * Resource description
     *
     * @var string
     */
    protected $_description;


    /**
     * Resource name
     *
     * @return string 
     */
	public function getName() {}

    /**
     * Resource name
     */
	public function __toString() {}

    /**
     * Resource description
     *
     * @return string 
     */
	public function getDescription() {}

    /**
     * Phalcon\Acl\Resource constructor
     *
     * @param string $name 
     * @param string $description 
     */
	public function __construct($name, $description = null) {}

}
