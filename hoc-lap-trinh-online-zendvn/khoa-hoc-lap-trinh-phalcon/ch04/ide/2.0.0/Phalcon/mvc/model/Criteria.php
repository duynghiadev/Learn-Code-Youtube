<?php

namespace Phalcon\Mvc\Model;

class Criteria implements \Phalcon\Mvc\Model\CriteriaInterface, \Phalcon\Di\InjectionAwareInterface
{

    protected $_model;


    protected $_params;


    protected $_bindParams;


    protected $_bindTypes;


    protected $_hiddenParamNumber = 0;


    /**
     * Sets the DependencyInjector container
     *
     * @param \Phalcon\DiInterface $dependencyInjector 
     */
	public function setDI(\Phalcon\DiInterface $dependencyInjector) {}

    /**
     * Returns the DependencyInjector container
     *
     * @return \Phalcon\DiInterface 
     */
	public function getDI() {}

    /**
     * Set a model on which the query will be executed
     *
     * @param string $modelName 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function setModelName($modelName) {}

    /**
     * Returns an internal model name on which the criteria will be applied
     *
     * @return string 
     */
	public function getModelName() {}

    /**
     * Sets the bound parameters in the criteria
     * This method replaces all previously set bound parameters
     *
     * @param array $bindParams 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function bind($bindParams) {}

    /**
     * Sets the bind types in the criteria
     * This method replaces all previously set bound parameters
     *
     * @param array $bindTypes 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function bindTypes($bindTypes) {}

    /**
     * Sets the columns to be queried
     * <code>
     * $criteria->columns(array('id', 'name'));
     * </code>
     *
     * @param string|array $columns 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function columns($columns) {}

    /**
     * Adds a INNER join to the query
     * <code>
     * $criteria->join('Robots');
     * $criteria->join('Robots', 'r.id = RobotsParts.robots_id');
     * $criteria->join('Robots', 'r.id = RobotsParts.robots_id', 'r');
     * $criteria->join('Robots', 'r.id = RobotsParts.robots_id', 'r', 'LEFT');
     * </code>
     *
     * @param string $model 
     * @param string $conditions 
     * @param string $alias 
     * @param string $type 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function join($model, $conditions = null, $alias = null, $type = null) {}

    /**
     * Adds a INNER join to the query
     * <code>
     * $criteria->innerJoin('Robots');
     * $criteria->innerJoin('Robots', 'r.id = RobotsParts.robots_id');
     * $criteria->innerJoin('Robots', 'r.id = RobotsParts.robots_id', 'r');
     * </code>
     *
     * @param string $model 
     * @param string $conditions 
     * @param string $alias 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function innerJoin($model, $conditions = null, $alias = null) {}

    /**
     * Adds a LEFT join to the query
     * <code>
     * $criteria->leftJoin('Robots', 'r.id = RobotsParts.robots_id', 'r');
     * </code>
     *
     * @param string $model 
     * @param string $conditions 
     * @param string $alias 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function leftJoin($model, $conditions = null, $alias = null) {}

    /**
     * Adds a RIGHT join to the query
     * <code>
     * $criteria->rightJoin('Robots', 'r.id = RobotsParts.robots_id', 'r');
     * </code>
     *
     * @param string $model 
     * @param string $conditions 
     * @param string $alias 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function rightJoin($model, $conditions = null, $alias = null) {}

    /**
     * Sets the conditions parameter in the criteria
     *
     * @param string $conditions 
     * @param array $bindParams 
     * @param array $bindTypes 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function where($conditions, $bindParams = null, $bindTypes = null) {}

    /**
     * Appends a condition to the current conditions using an AND operator (deprecated)
     *
     * @deprecated 1.0.0
     * @see \Phalcon\Mvc\Model\Criteria::andWhere()
     * @param string $conditions 
     * @param array $bindParams 
     * @param array $bindTypes 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function addWhere($conditions, $bindParams = null, $bindTypes = null) {}

    /**
     * Appends a condition to the current conditions using an AND operator
     *
     * @param string $conditions 
     * @param array $bindParams 
     * @param array $bindTypes 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function andWhere($conditions, $bindParams = null, $bindTypes = null) {}

    /**
     * Appends a condition to the current conditions using an OR operator
     *
     * @param string $conditions 
     * @param array $bindParams 
     * @param array $bindTypes 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function orWhere($conditions, $bindParams = null, $bindTypes = null) {}

    /**
     * Appends a BETWEEN condition to the current conditions
     * <code>
     * $criteria->betweenWhere('price', 100.25, 200.50);
     * </code>
     *
     * @param string $expr 
     * @param mixed $minimum 
     * @param mixed $maximum 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function betweenWhere($expr, $minimum, $maximum) {}

    /**
     * Appends a NOT BETWEEN condition to the current conditions
     * <code>
     * $criteria->notBetweenWhere('price', 100.25, 200.50);
     * </code>
     *
     * @param string $expr 
     * @param mixed $minimum 
     * @param mixed $maximum 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function notBetweenWhere($expr, $minimum, $maximum) {}

    /**
     * Appends an IN condition to the current conditions
     * <code>
     * $criteria->inWhere('id', [1, 2, 3]);
     * </code>
     *
     * @param string $expr 
     * @param array $values 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function inWhere($expr, $values) {}

    /**
     * Appends a NOT IN condition to the current conditions
     * <code>
     * $criteria->notInWhere('id', [1, 2, 3]);
     * </code>
     *
     * @param string $expr 
     * @param array $values 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function notInWhere($expr, $values) {}

    /**
     * Adds the conditions parameter to the criteria
     *
     * @param string $conditions 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function conditions($conditions) {}

    /**
     * Adds the order-by parameter to the criteria (deprecated)
     *
     * @deprecated 1.2.1
     * @see \Phalcon\Mvc\Model\Criteria::orderBy()
     * @param string $orderColumns 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function order($orderColumns) {}

    /**
     * Adds the order-by parameter to the criteria
     *
     * @param string $orderColumns 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function orderBy($orderColumns) {}

    /**
     * Adds the limit parameter to the criteria
     *
     * @param int $limit 
     * @param int $offset 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function limit($limit, $offset = null) {}

    /**
     * Adds the "for_update" parameter to the criteria
     *
     * @param boolean $forUpdate 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function forUpdate($forUpdate = true) {}

    /**
     * Adds the "shared_lock" parameter to the criteria
     *
     * @param boolean $sharedLock 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function sharedLock($sharedLock = true) {}

    /**
     * Sets the cache options in the criteria
     * This method replaces all previously set cache options
     *
     * @param array $cache 
     * @param array $options 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public function cache($cache) {}

    /**
     * Returns the conditions parameter in the criteria
     *
     * @return string|null 
     */
	public function getWhere() {}

    /**
     * Returns the columns to be queried
     *
     * @return string|array|null 
     */
	public function getColumns() {}

    /**
     * Returns the conditions parameter in the criteria
     *
     * @return string|null 
     */
	public function getConditions() {}

    /**
     * Returns the limit parameter in the criteria, which will be
     * an integer if limit was set without an offset,
     * an array with 'number' and 'offset' keys if an offset was set with the limit,
     * or null if limit has not been set.
     *
     * @return int|array|null 
     */
	public function getLimit() {}

    /**
     * Returns the order parameter in the criteria
     *
     * @return string|null 
     */
	public function getOrder() {}

    /**
     * Returns all the parameters defined in the criteria
     *
     * @return array 
     */
	public function getParams() {}

    /**
     * Builds a Phalcon\Mvc\Model\Criteria based on an input array like _POST
     *
     * @param \Phalcon\DiInterface $dependencyInjector 
     * @param string $modelName 
     * @param array $data 
     * @return \Phalcon\Mvc\Model\Criteria 
     */
	public static function fromInput(\Phalcon\DiInterface $dependencyInjector, $modelName, $data) {}

    /**
     * Executes a find using the parameters built with the criteria
     *
     * @return \Phalcon\Mvc\Model\ResultsetInterface 
     */
	public function execute() {}

}
