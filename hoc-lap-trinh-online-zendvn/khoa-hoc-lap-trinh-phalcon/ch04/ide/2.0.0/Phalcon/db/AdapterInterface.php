<?php

namespace Phalcon\Db;

interface AdapterInterface
{

    /**
     * Constructor for Phalcon\Db\Adapter
     *
     * @param array $descriptor 
     */
	public function __construct(array $descriptor);

    /**
     * Returns the first row in a SQL query result
     *
     * @param string $sqlQuery 
     * @param int $fetchMode 
     * @param int $placeholders 
     * @return array 
     */
	public function fetchOne($sqlQuery, $fetchMode = 2, $placeholders = null);

    /**
     * Dumps the complete result of a query into an array
     *
     * @param string $sqlQuery 
     * @param int $fetchMode 
     * @param int $placeholders 
     * @return array 
     */
	public function fetchAll($sqlQuery, $fetchMode = 2, $placeholders = null);

    /**
     * Inserts data into a table using custom RBDM SQL syntax
     *
     * @param mixed $table 
     * @param array $values 
     * @param mixed $fields 
     * @param mixed $dataTypes 
     * @param  $string table
     * @param  $array dataTypes
     * @return  
     */
	public function insert($table, $values, $fields = null, $dataTypes = null);

    /**
     * Updates data on a table using custom RBDM SQL syntax
     *
     * @param mixed $table 
     * @param mixed $fields 
     * @param mixed $values 
     * @param mixed $whereCondition 
     * @param mixed $dataTypes 
     * @param  $string whereCondition
     * @param  $array dataTypes
     * @return  
     */
	public function update($table, $fields, $values, $whereCondition = null, $dataTypes = null);

    /**
     * Deletes data from a table using custom RBDM SQL syntax
     *
     * @param string $table 
     * @param string $whereCondition 
     * @param array $placeholders 
     * @param array $dataTypes 
     * @return boolean 
     */
	public function delete($table, $whereCondition = null, $placeholders = null, $dataTypes = null);

    /**
     * Gets a list of columns
     *
     * @param	array columnList
     * @return	string
     * @param mixed $columnList 
     */
	public function getColumnList($columnList);

    /**
     * Appends a LIMIT clause to sqlQuery argument
     *
     * @param mixed $sqlQuery 
     * @param mixed $number 
     * @param  $string sqlQuery
     * @param  $int number
     * @return  
     */
	public function limit($sqlQuery, $number);

    /**
     * Generates SQL checking for the existence of a schema.table
     *
     * @param string $tableName 
     * @param string $schemaName 
     * @return string 
     */
	public function tableExists($tableName, $schemaName = null);

    /**
     * Generates SQL checking for the existence of a schema.view
     *
     * @param string $viewName 
     * @param string $schemaName 
     * @return string 
     */
	public function viewExists($viewName, $schemaName = null);

    /**
     * Returns a SQL modified with a FOR UPDATE clause
     *
     * @param	string sqlQuery
     * @return	string
     * @param string $sqlQuery 
     */
	public function forUpdate($sqlQuery);

    /**
     * Returns a SQL modified with a LOCK IN SHARE MODE clause
     *
     * @param	string sqlQuery
     * @return	string
     * @param mixed $sqlQuery 
     */
	public function sharedLock($sqlQuery);

    /**
     * Creates a table
     *
     * @param	string tableName
     * @param	string schemaName
     * @param	array definition
     * @return	boolean
     * @param mixed $tableName 
     * @param mixed $schemaName 
     * @param mixed $definition 
     */
	public function createTable($tableName, $schemaName, $definition);

    /**
     * Drops a table from a schema/database
     *
     * @param	string tableName
     * @param	boolean ifExists
     * @return	boolean
     * @param mixed $tableName 
     * @param string $schemaName 
     * @param mixed $ifExists 
     */
	public function dropTable($tableName, $schemaName = null, $ifExists = true);

    /**
     * Creates a view
     *
     * @param	string tableName
     * @param	array definition
     * @param	string schemaName
     * @return	boolean
     * @param mixed $viewName 
     * @param mixed $definition 
     * @param mixed $schemaName 
     */
	public function createView($viewName, $definition, $schemaName = null);

    /**
     * Drops a view
     *
     * @param	string viewName
     * @param	boolean ifExists
     * @return	boolean
     * @param mixed $viewName 
     * @param string $schemaName 
     * @param mixed $ifExists 
     */
	public function dropView($viewName, $schemaName = null, $ifExists = true);

    /**
     * Adds a column to a table
     *
     * @param	string tableName
     * @param	Phalcon\Db\ColumnInterface column
     * @return	boolean
     * @param mixed $tableName 
     * @param mixed $schemaName 
     * @param mixed $column 
     * @param  $string schemaName
     */
	public function addColumn($tableName, $schemaName, \Phalcon\Db\ColumnInterface $column);

    /**
     * Modifies a table column based on a definition
     *
     * @param	string tableName
     * @param	string schemaName
     * @param	Phalcon\Db\ColumnInterface column
     * @param mixed $tableName 
     * @param mixed $schemaName 
     * @param mixed $column 
     * @return  
     */
	public function modifyColumn($tableName, $schemaName, \Phalcon\Db\ColumnInterface $column);

    /**
     * Drops a column from a table
     *
     * @param	string tableName
     * @param	string schemaName
     * @param	string columnName
     * @param mixed $tableName 
     * @param mixed $schemaName 
     * @param mixed $columnName 
     * @return  
     */
	public function dropColumn($tableName, $schemaName, $columnName);

    /**
     * Adds an index to a table
     *
     * @param	string tableName
     * @param	string schemaName
     * @param	Phalcon\Db\IndexInterface index
     * @param mixed $tableName 
     * @param mixed $schemaName 
     * @param mixed $index 
     * @return  
     */
	public function addIndex($tableName, $schemaName, \Phalcon\Db\IndexInterface $index);

    /**
     * Drop an index from a table
     *
     * @param	string tableName
     * @param	string schemaName
     * @param	string indexName
     * @param mixed $tableName 
     * @param mixed $schemaName 
     * @param mixed $indexName 
     * @return  
     */
	public function dropIndex($tableName, $schemaName, $indexName);

    /**
     * Adds a primary key to a table
     *
     * @param	string tableName
     * @param	string schemaName
     * @param	Phalcon\Db\IndexInterface index
     * @param mixed $tableName 
     * @param mixed $schemaName 
     * @param mixed $index 
     * @return  
     */
	public function addPrimaryKey($tableName, $schemaName, \Phalcon\Db\IndexInterface $index);

    /**
     * Drops primary key from a table
     *
     * @param	string tableName
     * @param	string schemaName
     * @param mixed $tableName 
     * @param mixed $schemaName 
     * @return  
     */
	public function dropPrimaryKey($tableName, $schemaName);

    /**
     * Adds a foreign key to a table
     *
     * @param	string tableName
     * @param	string schemaName
     * @param	Phalcon\Db\ReferenceInterface reference
     * @return	boolean true
     * @param mixed $tableName 
     * @param mixed $schemaName 
     * @param mixed $reference 
     */
	public function addForeignKey($tableName, $schemaName, \Phalcon\Db\ReferenceInterface $reference);

    /**
     * Drops a foreign key from a table
     *
     * @param	string tableName
     * @param	string schemaName
     * @param	string referenceName
     * @return	boolean true
     * @param mixed $tableName 
     * @param mixed $schemaName 
     * @param mixed $referenceName 
     */
	public function dropForeignKey($tableName, $schemaName, $referenceName);

    /**
     * Returns the SQL column definition from a column
     *
     * @param	Phalcon\Db\ColumnInterface column
     * @return	string
     * @param mixed $column 
     */
	public function getColumnDefinition(\Phalcon\Db\ColumnInterface $column);

    /**
     * List all tables on a database
     *
     * @param string $schemaName 
     * @return array 
     */
	public function listTables($schemaName = null);

    /**
     * List all views on a database
     *
     * @param string $schemaName 
     * @return array 
     */
	public function listViews($schemaName = null);

    /**
     * Return descriptor used to connect to the active database
     *
     * @return array 
     */
	public function getDescriptor();

    /**
     * Gets the active connection unique identifier
     *
     * @return string 
     */
	public function getConnectionId();

    /**
     * Active SQL statement in the object
     *
     * @return string 
     */
	public function getSQLStatement();

    /**
     * Active SQL statement in the object without replace bound paramters
     *
     * @return string 
     */
	public function getRealSQLStatement();

    /**
     * Active SQL statement in the object
     *
     * @return array 
     */
	public function getSQLVariables();

    /**
     * Active SQL statement in the object
     *
     * @return array 
     */
	public function getSQLBindTypes();

    /**
     * Returns type of database system the adapter is used for
     *
     * @return string 
     */
	public function getType();

    /**
     * Returns the name of the dialect used
     *
     * @return string 
     */
	public function getDialectType();

    /**
     * Returns internal dialect instance
     *
     * @return \Phalcon\Db\DialectInterface 
     */
	public function getDialect();

    /**
     * This method is automatically called in Phalcon\Db\Adapter\Pdo constructor.
     * Call it when you need to restore a database connection
     *
     * @param mixed $descriptor 
     * @param  $array descriptor
     * @return  
     */
	public function connect($descriptor = null);

    /**
     * Sends SQL statements to the database server returning the success state.
     * Use this method only when the SQL statement sent to the server return rows
     *
     * @param string $sqlStatement 
     * @param array $placeholders 
     * @param array $dataTypes 
     * @return \Phalcon\Db\ResultInterface 
     */
	public function query($sqlStatement, $placeholders = null, $dataTypes = null);

    /**
     * Sends SQL statements to the database server returning the success state.
     * Use this method only when the SQL statement sent to the server don't return any row
     *
     * @param string $sqlStatement 
     * @param array $placeholders 
     * @param array $dataTypes 
     * @return boolean 
     */
	public function execute($sqlStatement, $placeholders = null, $dataTypes = null);

    /**
     * Returns the number of affected rows by the last INSERT/UPDATE/DELETE reported by the database system
     *
     * @return int 
     */
	public function affectedRows();

    /**
     * Closes active connection returning success. Phalcon automatically closes and destroys active connections within Phalcon\Db\Pool
     *
     * @return boolean 
     */
	public function close();

    /**
     * Escapes a column/table/schema name
     *
     * @param string $identifier 
     * @return string 
     */
	public function escapeIdentifier($identifier);

    /**
     * Escapes a value to avoid SQL injections
     *
     * @param string $str 
     * @return string 
     */
	public function escapeString($str);

    /**
     * Returns insert id for the auto_increment column inserted in the last SQL statement
     *
     * @param string $sequenceName 
     * @return int 
     */
	public function lastInsertId($sequenceName = null);

    /**
     * Starts a transaction in the connection
     *
     * @param bool $nesting 
     * @return boolean 
     */
	public function begin($nesting = true);

    /**
     * Rollbacks the active transaction in the connection
     *
     * @param bool $nesting 
     * @return boolean 
     */
	public function rollback($nesting = true);

    /**
     * Commits the active transaction in the connection
     *
     * @param bool $nesting 
     * @return boolean 
     */
	public function commit($nesting = true);

    /**
     * Checks whether connection is under database transaction
     *
     * @return boolean 
     */
	public function isUnderTransaction();

    /**
     * Return internal PDO handler
     *
     * @return \PDO 
     */
	public function getInternalHandler();

    /**
     * Lists table indexes
     *
     * @param	string table
     * @param	string schema
     * @return	Phalcon\Db\IndexInterface[]
     * @param mixed $table 
     * @param mixed $schema 
     */
	public function describeIndexes($table, $schema = null);

    /**
     * Lists table references
     *
     * @param	string table
     * @param	string schema
     * @return	Phalcon\Db\ReferenceInterface[]
     * @param mixed $table 
     * @param mixed $schema 
     */
	public function describeReferences($table, $schema = null);

    /**
     * Gets creation options from a table
     *
     * @param	string tableName
     * @param	string schemaName
     * @return	array
     * @param mixed $tableName 
     * @param mixed $schemaName 
     */
	public function tableOptions($tableName, $schemaName = null);

    /**
     * Check whether the database system requires an explicit value for identity columns
     *
     * @return boolean 
     */
	public function useExplicitIdValue();

    /**
     * Return the default identity value to insert in an identity column
     *
     * @return \Phalcon\Db\RawValue 
     */
	public function getDefaultIdValue();

    /**
     * Check whether the database system requires a sequence to produce auto-numeric values
     *
     * @return boolean 
     */
	public function supportSequences();

    /**
     * Creates a new savepoint
     *
     * @param string $name 
     * @return boolean 
     */
	public function createSavepoint($name);

    /**
     * Releases given savepoint
     *
     * @param string $name 
     * @return boolean 
     */
	public function releaseSavepoint($name);

    /**
     * Rollbacks given savepoint
     *
     * @param string $name 
     * @return boolean 
     */
	public function rollbackSavepoint($name);

    /**
     * Set if nested transactions should use savepoints
     *
     * @param boolean $nestedTransactionsWithSavepoints 
     * @return \Phalcon\Db\AdapterInterface 
     */
	public function setNestedTransactionsWithSavepoints($nestedTransactionsWithSavepoints);

    /**
     * Returns if nested transactions should use savepoints
     *
     * @return bool 
     */
	public function isNestedTransactionsWithSavepoints();

    /**
     * Returns the savepoint name to use for nested transactions
     *
     * @return string 
     */
	public function getNestedTransactionSavepointName();

    /**
     * Returns an array of Phalcon\Db\Column objects describing a table
     *
     * @param string $table 
     * @param string $schema 
     * @return \Phalcon\Db\ColumnInterface[] 
     */
	public function describeColumns($table, $schema = null);

}
