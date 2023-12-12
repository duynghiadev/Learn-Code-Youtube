<?php

namespace Phalcon\Logger\Formatter;

class Syslog extends \Phalcon\Logger\Formatter implements \Phalcon\Logger\FormatterInterface
{

    /**
     * Applies a format to a message before sent it to the internal log
     *
     * @param string $message 
     * @param int $type 
     * @param int $timestamp 
     * @param mixed $context 
     * @param array $$context 
     * @return array 
     */
	public function format($message, $type, $timestamp, $context = null) {}

}
