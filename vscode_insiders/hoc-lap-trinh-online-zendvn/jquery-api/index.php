<!DOCTYPE html>

<html lang="vi" manifest="cache.manifest">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		
		<title>Cac phuong thuc trong jQuery framework</title>

		<!--[if lt IE 9]>
		<meta http-equiv="X-UA-Compatible" content="IE=Edge;chrome=1">
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->

		<meta name="title" content="Cac phuong thuc trong jQuery framwork">
		<meta name="description" content="Cac phuong thuc trong jQuery framwork">
		<meta name="keywords" content="jQuery, javascript, cheatsheet, api, resource, web developer">

		<meta property="og:title" content="Cac phuong thuc trong jQuery framwork">
		<meta property="og:description" content="Cac phuong thuc trong jQuery framwork">

		<!-- Javascript -->
		<script type="text/javascript" async src="js/ga.js"></script>
		<script src="js/jquery-1.6.2.min.js" type="text/javascript"></script>
		<script src="js/jquery-ui-1.8.16.custom.min.js" type="text/javascript"></script>
		<script src="js/jquery.quicksearch.js" type="text/javascript"></script>
		<script src="js/jquery.cookie.js" type="text/javascript"></script>
		<script src="js/jquery.scrollTo-1.4.2-min.js" type="text/javascript"></script>

		<script src="js/scripts.js" type="text/javascript"></script>

		<!-- Css -->
		<link rel="stylesheet" href="css/csans1.2b.css" type="text/css">
		<link href="css/css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="js/jquery-ui-1.8.16.custom.css" type="text/css">

		<link rel="stylesheet" href="css/styles.css" type="text/css">
		<link rel="stylesheet" id="theme-styles" href="css/colorfull.css" type="text/css">
	</head>

	<body>
		<header>
			<hgroup>
				<h1><a href="http://jquery.com/" title="Go to jQuery site">jQuery</a></h1>
				<h2>Quick API Reference</h2>
			</hgroup>

			<nav>
				<label>Version: 
					<select id="version">
						<option value="a.v1-9">1.9</option>
						<option value="a.v1-8">1.8</option>
						<option value="a.v1-7">1.7</option>
						<option value="a.v1-6">1.6</option>
						<option value="a.v1-5">1.5</option>
						<option value="a.v1-4-4">1.4.4</option>
						<option value="a.v1-4-3">1.4.3</option>
						<option value="a.v1-4-2">1.4.2</option>
						<option value="a.v1-4-1">1.4.1</option>
						<option value="a.v1-4">1.4</option>
						<option value="a.v1-3">1.3</option>
						<option value="a.v1-2-6">1.2.6</option>
						<option value="a.v1-2-3">1.2.3</option>
						<option value="a.v1-2">1.2</option>
						<option value="a.v1-1-4">1.1.4</option>
						<option value="a.v1-1-3">1.1.3</option>
						<option value="a.v1-1-2">1.1.2</option>
						<option value="a.v1-1">1.1</option>
						<option value="a.v1-0-4">1.0.4</option>
						<option value="a.v1-0">1.0</option>
					</select>
				</label>
				<input type="search" id="search" placeholder="Search..." class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true">
			</nav>
			
			
		</header>

		<div class="content">
			<article id="selectors">
				<h1>Selectors</h1>

				<div>
					<section>
						<h2>Basics</h2>
						<ul>
							<li><a class="v1-0" title="Selects all elements." href="http://api.jquery.com/all-selector/">*</a></li>
							<li><a class="v1-0" title="Selects all elements with the given class." href="http://api.jquery.com/class-selector/">.class</a></li>
							<li><a class="v1-0" title="Selects all elements with the given tag name." href="http://api.jquery.com/element-selector/">element</a></li>
							<li><a class="v1-0" title="Selects a single element with the given id attribute." href="http://api.jquery.com/id-selector/">#id</a></li>
							<li><a class="v1-0" title="Selects the combined results of all the specified selectors." href="http://api.jquery.com/multiple-selector/">selector1, selectorN, ...</a></li>
						</ul>
					</section>

					<section>
						<h2>Hierarchy</h2>
						<ul>
							<li><a class="v1-0" title="Selects all direct child elements specified by &#39;child&#39; of elements specified by &#39;parent&#39;." href="http://api.jquery.com/child-selector/">parent &gt; child</a></li>
							<li><a class="v1-0" title="Selects all elements that are descendants of a given ancestor." href="http://api.jquery.com/descendant-selector/">ancestor descendant</a></li>
							<li><a class="v1-0" title="Selects all next elements matching &#39;next&#39; that are immediately preceded by a sibling &#39;prev&#39;." href="http://api.jquery.com/next-adjacent-Selector/">prev + next</a></li>
							<li><a class="v1-0" title="Selects all sibling elements that follow after the &#39;prev&#39; element, have the same parent, and match the filtering &#39;siblings&#39; selector." href="http://api.jquery.com/next-siblings-selector/">prev ~ siblings</a></li>
						</ul>
					</section>

					<section>
						<h2>Basic Filters</h2>
						<ul>
							<li><a class="v1-2" title="Select all elements that are in the progress of an animation at the time the selector is run." href="http://api.jquery.com/animated-selector/">:animated</a></li>
							<li><a class="v1-0" title="Select the element at index n within the matched set." href="http://api.jquery.com/eq-selector/">:eq()</a></li>
							<li><a class="v1-0" title="Selects even elements, zero-indexed. See also odd." href="http://api.jquery.com/even-selector/">:even</a></li>
							<li><a class="v1-0" title="Selects the first matched element." href="http://api.jquery.com/first-selector/">:first</a></li>
							<li><a class="v1-0" title="Select all elements at an index greater than index within the matched set." href="http://api.jquery.com/gt-selector/">:gt()</a></li>
							<li><a class="v1-2" title="Selects all elements that are headers, like h1, h2, h3 and so on." href="http://api.jquery.com/header-selector/">:header</a></li>
							<li><a class="v1-9" title="Selects all elements of the specified language." href="http://api.jquery.com/lang-selector/">:lang()</a></li>
							<li><a class="v1-0" title="Selects the last matched element." href="http://api.jquery.com/last-selector/">:last</a></li>
							<li><a class="v1-0" title="Select all elements at an index less than index within the matched set." href="http://api.jquery.com/lt-selector/">:lt()</a></li>
							<li><a class="v1-0" title="Selects all elements that do not match the given selector." href="http://api.jquery.com/not-selector/">:not()</a></li>
							<li><a class="v1-0" title="Selects odd elements, zero-indexed. See also even." href="http://api.jquery.com/odd-selector/">:odd</a></li>
							<li><a class="v1-9" title="Selects the element that is the root of the document." href="http://api.jquery.com/root-selector/">:root</a></li>
							<li><a class="v1-9" title="Selects the target element indicated by the fragment identifier of the document&#39;s URI." href="http://api.jquery.com/target-selector/">:target</a></li>
						</ul>
					</section>

					<section>
						<h2>Content Filters</h2>
						<ul>
							<li><a class="v1-1-4" title="Select all elements that contain the specified text." href="http://api.jquery.com/contains-selector/">:contains()</a></li>
							<li><a class="v1-0" title="Select all elements that have no children (including text nodes)." href="http://api.jquery.com/empty-selector/">:empty</a></li>
							<li><a class="v1-1-4" title="Selects elements which contain at least one element that matches the specified selector." href="http://api.jquery.com/has-selector/">:has()</a></li>
							<li><a class="v1-0" title="Select all elements that are the parent of another element, including text nodes." href="http://api.jquery.com/parent-selector/">:parent</a></li>
						</ul>
					</section>
				</div>
				<div>
					<section>
						<h2>Visibility Filters</h2>
						<ul>
							<li><a class="v1-0" title="Selects all elements that are hidden." href="http://api.jquery.com/hidden-selector/">:hidden</a></li>
							<li><a class="v1-0" title="Selects all elements that are visible." href="http://api.jquery.com/visible-selector/">:visible</a></li>
						</ul>
					</section>

					<section>
						<h2>Attribute</h2>
						<ul>
							<li><a class="v1-0" title="Selects elements that have the specified attribute with a value either equal to a given string or starting with that string followed by a hyphen (-)." href="http://api.jquery.com/attribute-contains-prefix-selector/">[name|="value"]</a></li>
							<li><a class="v1-0" title="Selects elements that have the specified attribute with a value containing the a given substring." href="http://api.jquery.com/attribute-contains-selector/">[name*="value"]</a></li>
							<li><a class="v1-0" title="Selects elements that have the specified attribute with a value containing a given word, delimited by spaces." href="http://api.jquery.com/attribute-contains-word-selector/">[name~="value"]</a></li>
							<li><a class="v1-0" title="Selects elements that have the specified attribute with a value ending exactly with a given string. The comparison is case sensitive." href="http://api.jquery.com/attribute-ends-with-selector/">[name$="value"]</a></li>
							<li><a class="v1-0" title="Selects elements that have the specified attribute with a value exactly equal to a certain value." href="http://api.jquery.com/attribute-equals-selector/">[name="value"]</a></li>
							<li><a class="v1-0" title="Select elements that either don&#39;t have the specified attribute, or do have the specified attribute but not with a certain value." href="http://api.jquery.com/attribute-not-equal-selector/">[name!="value"</a></li>
							<li><a class="v1-0" title="Selects elements that have the specified attribute with a value beginning exactly with a given string." href="http://api.jquery.com/attribute-starts-with-selector/">[name^="value"]</a></li>
							<li><a class="v1-0" title="Selects elements that have the specified attribute, with any value." href="http://api.jquery.com/has-attribute-selector/">[name]</a></li>
							<li><a class="v1-0" title="Matches elements that match all of the specified attribute filters." href="http://api.jquery.com/multiple-attribute-selector/">[name="value"][name2="value2"]</a></li>
						</ul>
					</section>

					<section>
						<h2>Child Filters</h2>
						<ul>
							<li><a class="v1-1-4" title="Selects all elements that are the first child of their parent." href="http://api.jquery.com/first-child-selector/">:first-child</a></li>
							<li><a class="v1-9" title="Selects all elements that are the first among siblings of the same element name." href="http://api.jquery.com/first-of-type-selector/">:first-of-type</a></li>
							<li><a class="v1-1-4" title="Selects all elements that are the last child of their parent." href="http://api.jquery.com/last-child-selector/">:last-child</a></li>
							<li><a class="v1-9" title="Selects all elements that are the last among siblings of the same element name." href="http://api.jquery.com/last-of-type-selector/">:last-of-type</a></li>
							<li><a class="v1-1-4" title="Selects all elements that are the nth-child of their parent." href="http://api.jquery.com/nth-child-selector/">:nth-child()</a></li>
							<li><a class="v1-9" title="Selects all elements that are the nth-child of their parent, counting from the last element to the first." href="http://api.jquery.com/nth-last-child-selector/">:nth-last-child()</a></li>
							<li><a class="v1-9" title="Selects all elements that are the nth-child of their parent, counting from the last element to the first." href="http://api.jquery.com/nth-last-of-type-selector/">:nth-last-of-type()</a></li>
							<li><a class="v1-9" title="Selects all elements that are the nth child of their parent in relation to siblings with the same element name." href="http://api.jquery.com/nth-of-type-selector/">:nth-of-type()</a></li>
							<li><a class="v1-1-4" title="Selects all elements that are the only child of their parent." href="http://api.jquery.com/only-child-selector/">:only-child</a></li>
							<li><a class="v1-9" title="Selects all elements that have no siblings with the same element name." href="http://api.jquery.com/only-of-type-selector/">:only-of-type()</a></li>
						</ul>
					</section>
				</div>
				<div>
					<section>
						<h2>Forms</h2>
						<ul>
							<li><a class="v1-0" title="Selects all button elements and elements of type button." href="http://api.jquery.com/button-selector/">:button</a></li>
							<li><a class="v1-0" title="Selects all elements of type checkbox." href="http://api.jquery.com/checkbox-selector/">:checkbox</a></li>
							<li><a class="v1-0" title="Matches all elements that are checked." href="http://api.jquery.com/checked-selector/">:checked</a></li>
							<li><a class="v1-0" title="Selects all elements that are disabled." href="http://api.jquery.com/disabled-selector/">:disabled</a></li>
							<li><a class="v1-0" title="Selects all elements that are enabled." href="http://api.jquery.com/enabled-selector/">:enabled</a></li>
							<li><a class="v1-6" title="Selects element if it is currently focused." href="http://api.jquery.com/focus-selector/">:focus</a></li>
							<li><a class="v1-0" title="Selects all elements of type file." href="http://api.jquery.com/file-selector/">:file</a></li>
							<li><a class="v1-0" title="Selects all elements of type image." href="http://api.jquery.com/image-selector/">:image</a></li>
							<li><a class="v1-0" title="Selects all input, textarea, select and button elements." href="http://api.jquery.com/input-selector/">:input</a></li>
							<li><a class="v1-0" title="Selects all elements of type password." href="http://api.jquery.com/password-selector/">:password</a></li>
							<li><a class="v1-0" title="Selects all elements of type radio." href="http://api.jquery.com/radio-selector/">:radio</a></li>
							<li><a class="v1-0" title="Selects all elements of type reset." href="http://api.jquery.com/reset-selector/">:reset</a></li>
							<li><a class="v1-0" title="Selects all elements that are selected." href="http://api.jquery.com/selected-selector/">:selected</a></li>
							<li><a class="v1-0" title="Selects all elements of type submit." href="http://api.jquery.com/submit-selector/">:submit</a></li>
							<li><a class="v1-0" title="Selects all elements of type text." href="http://api.jquery.com/text-selector/">:text</a></li>
						</ul>
					</section>
				</div>
			</article><article id="attributes">
				<h1>Attributes / CSS</h1>

				<div>
					<section>
						<h2>Attributes</h2>
						<ul>
							<li><a class="v1-0" title="Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element." href="http://api.jquery.com/attr/">.attr()</a></li>
							<li><a class="v1-6" title="Get the value of a property for the first element in the set of matched elements or set one or more properties for every matched element." href="http://api.jquery.com/prop/">.prop()</a></li>
							<li><a class="v1-0" title="Remove an attribute from each element in the set of matched elements." href="http://api.jquery.com/removeAttr/">.removeAttr()</a></li>
							<li><a class="v1-6" title="Remove a property for the set of matched elements." href="http://api.jquery.com/removeProp/">.removeProp()</a></li>
							<li><a class="v1-0" title="Get the current value of the first element in the set of matched elements or set the value of every matched element." href="http://api.jquery.com/val/">.val()</a></li>
						</ul>
					</section>

					<section>
						<h2>CSS</h2>
						<ul>
							<li><a class="v1-0" title="Adds the specified class(es) to each of the set of matched elements." href="http://api.jquery.com/addClass/">.addClass()</a></li>
							<li><a class="v1-0" title="Get the value of a style property for the first element in the set of matched elements or set one or more CSS properties for every matched element." href="http://api.jquery.com/css/">.css()</a></li>
							<li><a class="v1-4-3" title="Provides a way to hook directly into jQuery to override how particular CSS properties are retrieved or set. Amongst other uses, cssHooks can be used to create custom, browser-normalized properties for CSS3 features such as box-shadows and gradients." href="http://api.jquery.com/jQuery.cssHooks/">jQuery.cssHooks</a></li>
							<li><a class="v1-2" title="Determine whether any of the matched elements are assigned the given class." href="http://api.jquery.com/hasClass/">.hasClass()</a></li>
							<li><a class="v1-0" title="Remove a single class, multiple classes, or all classes from each element in the set of matched elements." href="http://api.jquery.com/removeClass/">.removeClass()</a></li>
							<li><a class="v1-0" title="Add or remove one or more classes from each element in the set of matched elements, depending on either the class&#39;s presence or the value of the switch argument." href="http://api.jquery.com/toggleClass/">.toggleClass()</a></li>
						</ul>
					</section>
					
					<section>
						<h2>Dimensions</h2>
						<ul>
							<li><a class="v1-0" title="Get the current computed height for the first element in the set of matched elements or set the height of every matched element." href="http://api.jquery.com/height/">.height()</a></li>
							<li><a class="v1-2-6" title="Get the current computed height for the first element in the set of matched elements, including padding but not border." href="http://api.jquery.com/innerHeight/">.innerHeight()</a></li>
							<li><a class="v1-2-6" title="Get the current computed width for the first element in the set of matched elements, including padding but not border." href="http://api.jquery.com/innerWidth/">.innerWidth()</a></li>
							<li><a class="v1-2-6" title="Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin." href="http://api.jquery.com/outerHeight/">.outerHeight()</a></li>
							<li><a class="v1-2-6" title="Get the current computed width for the first element in the set of matched elements, including padding and border." href="http://api.jquery.com/outerWidth/">.outerWidth()</a></li>
							<li><a class="v1-0" title="Get the current computed width for the first element in the set of matched elements or set the width of every matched element." href="http://api.jquery.com/width/">.width()</a></li>
						</ul>
					</section>
					
					<section>
						<h2>Offset</h2>
						<ul>
							<li><a class="v1-2" title="Get the current coordinates of the first element, or set the coordinates of every element, in the set of matched elements, relative to the document." href="http://api.jquery.com/offset/">.offset()</a></li>
							<li><a class="v1-2-6" title="Get the closest ancestor element that is positioned." href="http://api.jquery.com/offsetParent/">.offsetParent()</a></li>
							<li><a class="v1-2" title="Get the current coordinates of the first element in the set of matched elements, relative to the offset parent." href="http://api.jquery.com/position/">.position()</a></li>
							<li><a class="v1-2-6" title="Get the current horizontal position of the scroll bar for the first element in the set of matched elements or set the horizontal position of the scroll bar for every matched element." href="http://api.jquery.com/scrollLeft/">.scrollLeft()</a></li>
							<li><a class="v1-2-6" title="Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element." href="http://api.jquery.com/scrollTop/">.scrollTop()</a></li>
						</ul>
					</section>
					
					<section>
						<h2>Data</h2>
						<ul>
							<li><a class="v1-2-3" title="Store arbitrary data associated with the specified element and/or return the value that was set." href="http://api.jquery.com/jQuery.data/">jQuery.data()</a></li>
							<li><a class="v1-2-3" title="Store arbitrary data associated with the matched elements or return the value at the named data store for the first element in the set of matched elements." href="http://api.jquery.com/data/">.data()</a></li>
							<li><a class="v1-5" title="Determine whether an element has any jQuery data associated with it." href="http://api.jquery.com/jQuery.hasData/">jQuery.hasData()</a></li>
							<li><a class="v1-2-3" title="Remove a previously-stored piece of data." href="http://api.jquery.com/jQuery.removeData/">jQuery.removeData()</a></li>
							<li><a class="v1-2-3" title="Remove a previously-stored piece of data." href="http://api.jquery.com/removeData/">.removeData()</a></li>
						</ul>
					</section>
				</div>
			</article><article id="manipulation">
				<h1>Manipulation</h1>
				
				<div>
					<section>
						<h2>Copying</h2>
						<ul>
							<li><a class="v1-0" title="Create a deep copy of the set of matched elements." href="http://api.jquery.com/clone/">.clone()</a></li>
						</ul>
					</section>
					
					<section>
						<h2>DOM Insertion, Around</h2>
						<ul>
							<li><a class="v1-0" title="Wrap an HTML structure around each element in the set of matched elements." href="http://api.jquery.com/wrap/">.wrap()</a></li>
							<li><a class="v1-2" title="Wrap an HTML structure around all elements in the set of matched elements." href="http://api.jquery.com/wrapAll/">.wrapAll()</a></li>
							<li><a class="v1-2" title="Wrap an HTML structure around the content of each element in the set of matched elements." href="http://api.jquery.com/wrapInner/">.wrapInner()</a></li>
						</ul>
					</section>
					
					<section>
						<h2>DOM Insertion, Inside</h2>
						<ul>
							<li><a class="v1-0" title="Insert content, specified by the parameter, to the end of each element in the set of matched elements." href="http://api.jquery.com/append/">.append()</a></li>
							<li><a class="v1-0" title="Insert every element in the set of matched elements to the end of the target." href="http://api.jquery.com/appendTo/">.appendTo()</a></li>
							<li><a class="v1-0" title="Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element." href="http://api.jquery.com/html/">.html()</a></li>
							<li><a class="v1-0" title="Insert content, specified by the parameter, to the beginning of each element in the set of matched elements." href="http://api.jquery.com/prepend/">.prepend()</a></li>
							<li><a class="v1-0" title="Insert every element in the set of matched elements to the beginning of the target." href="http://api.jquery.com/prependTo/">.prependTo()</a></li>
							<li><a class="v1-0" title="Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements." href="http://api.jquery.com/text/">.text()</a></li>
						</ul>
					</section>

					<section>
						<h2>DOM Insertion, Outside</h2>
						<ul>
							<li><a class="v1-0" title="Insert content, specified by the parameter, after each element in the set of matched elements." href="http://api.jquery.com/after/">.after()</a></li>
							<li><a class="v1-0" title="Insert content, specified by the parameter, before each element in the set of matched elements." href="http://api.jquery.com/before/">.before()</a></li>
							<li><a class="v1-0" title="Insert every element in the set of matched elements after the target." href="http://api.jquery.com/insertAfter/">.insertAfter()</a></li>
							<li><a class="v1-0" title="Insert every element in the set of matched elements before the target." href="http://api.jquery.com/insertBefore/">.insertBefore()</a></li>
						</ul>
					</section>
					
					<section>
						<h2>DOM Removal</h2>
						<ul>
							<li><a class="v1-4" title="Remove the set of matched elements from the DOM." href="http://api.jquery.com/detach/">.detach()</a></li>
							<li><a class="v1-0" title="Remove all child nodes of the set of matched elements from the DOM." href="http://api.jquery.com/empty/">.empty()</a></li>
							<li><a class="v1-0" title="Remove the set of matched elements from the DOM." href="http://api.jquery.com/remove/">.remove()</a></li>
							<li><a class="v1-4" title="Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place." href="http://api.jquery.com/unwrap/">.unwrap()</a></li>
						</ul>
					</section>

					<section>
						<h2>DOM Replacement</h2>
						<ul>
							<li><a class="v1-2" title="Replace each target element with the set of matched elements." href="http://api.jquery.com/replaceAll/">.replaceAll()</a></li>
							<li><a class="v1-2" title="Replace each element in the set of matched elements with the provided new content." href="http://api.jquery.com/replaceWith/">.replaceWith()</a></li>
						</ul>
					</section>
				</div>
			</article><article id="traversing">
				<h1>Traversing</h1>

				<div>
					<section>
						<h2>Filtering</h2>
						<ul>
							<li><a class="v1-1-2" title="Reduce the set of matched elements to the one at the specified index." href="http://api.jquery.com/eq/">.eq()</a></li>
							<li><a class="v1-0" title="Reduce the set of matched elements to those that match the selector or pass the function&#39;s test." href="http://api.jquery.com/filter/">.filter()</a></li>
							<li><a class="v1-4" title="Reduce the set of matched elements to the first in the set." href="http://api.jquery.com/first/">.first()</a></li>
							<li><a class="v1-4" title="Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element." href="http://api.jquery.com/has/">.has()</a></li>
							<li><a class="v1-0" title="Check the current matched set of elements against a selector and return true if at least one of these elements matches the selector." href="http://api.jquery.com/is/">.is()</a></li>
							<li><a class="v1-4" title="Reduce the set of matched elements to the final one in the set." href="http://api.jquery.com/last/">.last()</a></li>
							<li><a class="v1-2" title="Pass each element in the current matched set through a function, producing a new jQuery object containing the return values." href="http://api.jquery.com/map/">.map()</a></li>
							<li><a class="v1-0" title="Remove elements from the set of matched elements." href="http://api.jquery.com/not/">.not()</a></li>
							<li><a class="v1-1-4" title="Reduce the set of matched elements to a subset specified by a range of indices." href="http://api.jquery.com/slice/">.slice()</a></li>
						</ul>
					</section>
					
					<section>
						<h2>Miscellaneous Traversing</h2>
						<ul>
							<li><a class="v1-0" title="Add elements to the set of matched elements." href="http://api.jquery.com/add/">.add()</a></li>
							<li><a class="v1-2 v1-8-d old-version" title="Add the previous set of elements on the stack to the current set." href="http://api.jquery.com/andSelf/">.andSelf()</a></li>
							<li><a class="v1-2" title="Get the children of each element in the set of matched elements, including text and comment nodes." href="http://api.jquery.com/contents/">.contents()</a></li>
							<li><a class="v1-0" title="Iterate over a jQuery object, executing a function for each matched element." href="http://api.jquery.com/each/">.each()</a></li>
							<li><a class="v1-0" title="End the most recent filtering operation in the current chain and return the set of matched elements to its previous state." href="http://api.jquery.com/end/">.end()</a></li>
						</ul>
					</section>

					<section>
						<h2>Tree Traversal</h2>
						<ul>
							<li><a class="v1-8" title="Add the previous set of elements on the stack to the current set, optionally filtered by a selector." href="http://api.jquery.com/addBack/">.addBack()</a></li>
							<li><a class="v1-0" title="Get the children of each element in the set of matched elements, optionally filtered by a selector." href="http://api.jquery.com/children/">.children()</a></li>
							<li><a class="v1-3" title="Get the first ancestor element that matches the selector, beginning at the current element and progressing up through the DOM tree." href="http://api.jquery.com/closest/">.closest()</a></li>
							<li><a class="v1-0" title="Get the descendants of each element in the current set of matched elements, filtered by a selector." href="http://api.jquery.com/find/">.find()</a></li>
							<li><a class="v1-0" title="Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector." href="http://api.jquery.com/next/">.next()</a></li>
							<li><a class="v1-2" title="Get all following siblings of each element in the set of matched elements, optionally filtered by a selector." href="http://api.jquery.com/nextAll/">.nextAll()</a></li>
							<li><a class="v1-4" title="Get all following siblings of each element up to but not including the element matched by the selector." href="http://api.jquery.com/nextUntil/">.nextUntil()</a></li>
							<li><a class="v1-0" title="Get the parent of each element in the current set of matched elements, optionally filtered by a selector." href="http://api.jquery.com/parent/">.parent()</a></li>
							<li><a class="v1-0" title="Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector." href="http://api.jquery.com/parents/">.parents()</a></li>
							<li><a class="v1-4" title="Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector." href="http://api.jquery.com/parentsUntil/">.parentsUntil()</a></li>
							<li><a class="v1-0" title="Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector." href="http://api.jquery.com/prev/">.prev()</a></li>
							<li><a class="v1-2" title="Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector." href="http://api.jquery.com/prevAll/">.prevAll()</a></li>
							<li><a class="v1-4" title="Get all preceding siblings of each element up to but not including the element matched by the selector." href="http://api.jquery.com/prevUntil/">.prevUntil()</a></li>
							<li><a class="v1-0" title="Get the siblings of each element in the set of matched elements, optionally filtered by a selector." href="http://api.jquery.com/siblings/">.siblings()</a></li>
						</ul>
					</section>
				</div>
			</article><article id="events">
				<h1>Events</h1>

				<div>
					<section>
						<h2>Browser Events</h2>
						<ul>
							<li><a class="v1-0 v1-8-d old-version" title="Bind an event handler to the &#39;error&#39; JavaScript event." href="http://api.jquery.com/error/">.error()</a></li>
							<li><a class="v1-0" title="Bind an event handler to the &#39;resize&#39; JavaScript event, or trigger that event on an element." href="http://api.jquery.com/resize/">.resize()</a></li>
							<li><a class="v1-0" title="Bind an event handler to the &#39;scroll&#39; JavaScript event, or trigger that event on an element." href="http://api.jquery.com/scroll/">.scroll()</a></li>
						</ul>
					</section>

					<section>
						<h2>Document Loading</h2>
						<ul>
							<li><a class="v1-6" title="Holds or releases the execution of jQuery&#39;s ready event." href="http://api.jquery.com/jQuery.holdReady/">.holdReady()</a></li>
							<li><a class="v1-0 v1-8-d old-version" title="Bind an event handler to the &#39;load&#39; JavaScript event." href="http://api.jquery.com/load-event/">.load()</a></li>
							<li><a class="v1-0" title="Specify a function to execute when the DOM is fully loaded." href="http://api.jquery.com/ready/">.ready()</a></li>
							<li><a class="v1-0 v1-8-d old-version" title="Bind an event handler to the &#39;unload&#39; JavaScript event." href="http://api.jquery.com/unload/">.unload()</a></li>
						</ul>
					</section>

					<section>
						<h2>Event Handler Attachment</h2>
						<ul>
							<li><a class="v1-0" title="Attach a handler to an event for the elements." href="http://api.jquery.com/bind/">.bind()</a></li>
							<li><a class="v1-4-2" title="Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements." href="http://api.jquery.com/delegate/">.delegate()</a></li>
							<li><a class="v1-3 v1-7-d v1-9-r removed old-version" title="Remove all event handlers previously attached using .live() from the elements." href="http://api.jquery.com/die/">.die()</a></li>
							<li><a class="v1-3 v1-7-d v1-9-r removed old-version" title="Attach a handler to the event for all elements which match the current selector, now and in the future." href="http://api.jquery.com/live/">.live()</a></li>
							<li><a class="v1-7" title="Remove an event handler." href="http://api.jquery.com/off/">.off()</a></li>
							<li><a class="v1-7" title="Attach an event handler function for one or more events to the selected elements." href="http://api.jquery.com/on/">.on()</a></li>
							<li><a class="v1-1" title="Attach a handler to an event for the elements. The handler is executed at most once per element." href="http://api.jquery.com/one/">.one()</a></li>
							<li><a class="v1-0" title="Execute all handlers and behaviors attached to the matched elements for the given event type." href="http://api.jquery.com/trigger/">.trigger()</a></li>
							<li><a class="v1-2" title="Execute all handlers attached to an element for an event." href="http://api.jquery.com/triggerHandler/">.triggerHandler()</a></li>
							<li><a class="v1-0" title="Remove a previously-attached event handler from the elements." href="http://api.jquery.com/unbind/">.unbind()</a></li>
							<li><a class="v1-4-2" title="Remove a handler from the event for all elements which match the current selector, now or in the future, based upon a specific set of root elements." href="http://api.jquery.com/undelegate/">.undelegate()</a></li>
						</ul>
					</section>

					<section>
						<h2>Form Events</h2>
						<ul>
							<li><a class="v1-0" title="Bind an event handler to the &#39;blur&#39; JavaScript event, or trigger that event on an element." href="http://api.jquery.com/blur/">.blur()</a></li>
							<li><a class="v1-0" title="Bind an event handler to the &#39;change&#39; JavaScript event, or trigger that event on an element." href="http://api.jquery.com/change/">.change()</a></li>
							<li><a class="v1-0" title="Bind an event handler to the &#39;focus&#39; JavaScript event, or trigger that event on an element." href="http://api.jquery.com/focus/">.focus()</a></li>
							<li><a class="v1-0" title="Bind an event handler to the &#39;select&#39; JavaScript event, or trigger that event on an element." href="http://api.jquery.com/select/">.select()</a></li>
							<li><a class="v1-0" title="Bind an event handler to the &#39;submit&#39; JavaScript event, or trigger that event on an element." href="http://api.jquery.com/submit/">.submit()</a></li>
						</ul>
					</section>

					<section>
						<h2>Keyboard Events</h2>
						<ul>
							<li><a class="v1-0" title="Bind an event handler to the &#39;keydown&#39; JavaScript event, or trigger that event on an element." href="http://api.jquery.com/keydown/">.keydown()</a></li>
							<li><a class="v1-0" title="Bind an event handler to the &#39;keypress&#39; JavaScript event, or trigger that event on an element." href="http://api.jquery.com/keypress/">.keypress()</a></li>
							<li><a class="v1-0" title="Bind an event handler to the &#39;keyup&#39; JavaScript event, or trigger that event on an element." href="http://api.jquery.com/keyup/">.keyup()</a></li>
						</ul>
					</section>
				</div>

				<div>
					<section>
						<h2>Mouse Events</h2>
						<ul>
							<li><a class="v1-0" title="Bind an event handler to the &#39;click&#39; JavaScript event, or trigger that event on an element." href="http://api.jquery.com/click/">.click()</a></li>
							<li><a class="v1-0" title="Bind an event handler to the &#39;dblclick&#39; JavaScript event, or trigger that event on an element." href="http://api.jquery.com/dblclick/">.dblclick()</a></li>
							<li><a class="v1-4" title="Bind an event handler to the &#39;focusin&#39; JavaScript event." href="http://api.jquery.com/focusin/">.focusin()</a></li>
							<li><a class="v1-4" title="Bind an event handler to the &#39;focusout&#39; JavaScript event." href="http://api.jquery.com/focusout/">.focusout()</a></li>
							<li><a class="v1-0" title="Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements." href="http://api.jquery.com/hover/">.hover()</a></li>
							<li><a class="v1-0" title="Bind an event handler to the &#39;mousedown&#39; JavaScript event, or trigger that event on an element." href="http://api.jquery.com/mousedown/">.mousedown()</a></li>
							<li><a class="v1-0" title="Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element." href="http://api.jquery.com/mouseenter/">.mouseenter()</a></li>
							<li><a class="v1-0" title="Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element." href="http://api.jquery.com/mouseleave/">.mouseleave()</a></li>
							<li><a class="v1-0" title="Bind an event handler to the &#39;mousemove&#39; JavaScript event, or trigger that event on an element." href="http://api.jquery.com/mousemove/">.mousemove()</a></li>
							<li><a class="v1-0" title="Bind an event handler to the &#39;mouseout&#39; JavaScript event, or trigger that event on an element." href="http://api.jquery.com/mouseout/">.mouseout()</a></li>
							<li><a class="v1-0" title="Bind an event handler to the &#39;mouseover&#39; JavaScript event, or trigger that event on an element." href="http://api.jquery.com/mouseover/">.mouseover()</a></li>
							<li><a class="v1-0" title="Bind an event handler to the &#39;mouseup&#39; JavaScript event, or trigger that event on an element." href="http://api.jquery.com/mouseup/">.mouseup()</a></li>
							<li><a class="v1-0 v1-8-d v1-9-r removed old-version" title="Bind two or more handlers to the matched elements, to be executed on alternate clicks." href="http://api.jquery.com/toggle-event/">.toggle()</a></li>
						</ul>
					</section>
					
					<section>
						<h2>Event Object</h2>
						<ul>
							<li><a class="v1-3" title="The current DOM element within the event bubbling phase." href="http://api.jquery.com/event.currentTarget/">event.currentTarget</a></li>
							<li><a class="v1-1" title="The optional data passed to jQuery.fn.bind when the current executing handler was bound." href="http://api.jquery.com/event.data/">event.data</a></li>
							<li><a class="v1-3" title="Returns whether event.preventDefault() was ever called on this event object." href="http://api.jquery.com/event.isDefaultPrevented/">event.isDefaultPrevented()</a></li>
							<li><a class="v1-3" title="Returns whether event.stopImmediatePropagation() was ever called on this event object." href="http://api.jquery.com/event.isImmediatePropagationStopped/">event.isImmediatePropagationStopped()</a></li>
							<li><a class="v1-3" title="Returns whether event.stopPropagation() was ever called on this event object." href="http://api.jquery.com/event.isPropagationStopped/">event.isPropagationStopped()</a></li>
							<li><a class="v1-4-3" title="The namespace specified when the event was triggered." href="http://api.jquery.com/event.namespace/">event.namespace</a></li>
							<li><a class="v1-0-4" title="The mouse position relative to the left edge of the document." href="http://api.jquery.com/event.pageX/">event.pageX</a></li>
							<li><a class="v1-0-4" title="The mouse position relative to the top edge of the document." href="http://api.jquery.com/event.pageY/">event.pageY</a></li>
							<li><a class="v1-0" title="If this method is called, the default action of the event will not be triggered." href="http://api.jquery.com/event.preventDefault/">event.preventDefault()</a></li>
							<li><a class="v1-1-4" title="The other DOM element involved in the event, if any." href="http://api.jquery.com/event.relatedTarget/">event.relatedTarget</a></li>
							<li><a class="v1-3" title="The last value returned by an event handler that was triggered by this event, unless the value was undefined." href="http://api.jquery.com/event.result/">event.result</a></li>
							<li><a class="v1-3" title="Prevents other event handlers from being called." href="http://api.jquery.com/event.stopImmediatePropagation/">event.stopImmediatePropagation()</a></li>
							<li><a class="v1-0" title="Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event." href="http://api.jquery.com/event.stopPropagation/">event.stopPropagation()</a></li>
							<li><a class="v1-0" title="The DOM element that initiated the event." href="http://api.jquery.com/event.target/">event.target</a></li>
							<li><a class="v1-2-6" title="The difference in milliseconds between the time an event is triggered and January 1, 1970." href="http://api.jquery.com/event.timeStamp/">event.timeStamp</a></li>
							<li><a class="v1-0" title="Describes the nature of the event." href="http://api.jquery.com/event.type/">event.type</a></li>
							<li><a class="v1-1-3" title="For key or button events, this attribute indicates the specific button or key that was pressed." href="http://api.jquery.com/event.which/">event.which</a></li>
						</ul>
					</section>
				</div>
			</article><article id="effects">
				<h1>Effects</h1>

				<div>
					<section>
						<h2>Basics</h2>
						<ul>
							<li><a class="v1-0" title="Hide the matched elements." href="http://api.jquery.com/hide/">.hide()</a></li>
							<li><a class="v1-0" title="Display the matched elements." href="http://api.jquery.com/show/">.show()</a></li>
							<li><a class="v1-0" title="Display or hide the matched elements." href="http://api.jquery.com/toggle/">.toggle()</a></li>
						</ul>
					</section>
							
					<section>
						<h2>Custom</h2>
						<ul>
							<li><a class="v1-0" title="Perform a custom animation of a set of CSS properties." href="http://api.jquery.com/animate">.animate()</a></li>
							<li><a class="v1-4" title="Remove from the queue all items that have not yet been run." href="http://api.jquery.com/clearQueue">.clearQueue()</a></li>
							<li><a class="v1-4" title="Set a timer to delay execution of subsequent items in the queue." href="http://api.jquery.com/delay">.delay()</a></li>
							<li><a class="v1-2" title="Execute the next function on the queue for the matched elements." href="http://api.jquery.com/dequeue">.dequeue()</a></li>
							<li><a class="v1-3" title="Execute the next function on the queue for the matched element." href="http://api.jquery.com/jQuery.dequeue/">jQuery.dequeue()</a></li>
							<li><a class="v1-9" title="Stop the currently-running animation, remove all queued animations, and complete all animations for the matched elements." href="http://api.jquery.com/finish/">.finish()</a></li>
							<li><a class="v1-4-3" title="The rate (in milliseconds) at which animations fire." href="http://api.jquery.com/jQuery.fx.interval">jQuery.fx.interval</a></li>
							<li><a class="v1-3" title="Globally disable all animations." href="http://api.jquery.com/jQuery.fx.off">jQuery.fx.off</a></li>
							<li><a class="v1-2" title="Show or manipulate the queue of functions to be executed on the matched elements." href="http://api.jquery.com/queue">.queue()</a></li>
							<li><a class="v1-3" title="Show or manipulate the queue of functions to be executed on the matched element." href="http://api.jquery.com/jQuery.queue/">jQuery.queue()</a></li>
							<li><a class="v1-2" title="Stop the currently-running animation on the matched elements." href="http://api.jquery.com/stop">.stop()</a></li>
						</ul>
					</section>

					<section>
						<h2>Fading</h2>
						<ul>
							<li><a class="v1-0" title="Display the matched elements by fading them to opaque." href="http://api.jquery.com/fadeIn/">.fadeIn()</a></li>
							<li><a class="v1-0" title="Hide the matched elements by fading them to transparent." href="http://api.jquery.com/fadeOut/">.fadeOut()</a></li>
							<li><a class="v1-0" title="Adjust the opacity of the matched elements." href="http://api.jquery.com/fadeTo/">.fadeTo()</a></li>
							<li><a class="v1-4-4" title="Display or hide the matched elements by animating their opacity." href="http://api.jquery.com/fadeToggle/">.fadeToggle()</a></li>
						</ul>
					</section>

					<section>
						<h2>Sliding</h2>
						<ul>
							<li><a class="v1-0" title="Display the matched elements with a sliding motion." href="http://api.jquery.com/slideDown">.slideDown()</a></li>
							<li><a class="v1-0" title="Display or hide the matched elements with a sliding motion." href="http://api.jquery.com/slideToggle">.slideToggle()</a></li>
							<li><a class="v1-0" title="Hide the matched elements with a sliding motion." href="http://api.jquery.com/slideUp">.slideUp()</a></li>
						</ul>
					</section>
				</div>
			</article><article id="ajax">
				<h1>Ajax</h1>
				
				<div>
					<section>
						<h2>Global Ajax Event Handlers</h2>
						<ul>
							<li><a class="v1-0" title="Register a handler to be called when Ajax requests complete. This is an Ajax Event." href="http://api.jquery.com/ajaxComplete/">.ajaxComplete()</a></li>
							<li><a class="v1-0" title="Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event." href="http://api.jquery.com/ajaxError/">.ajaxError()</a></li>
							<li><a class="v1-0" title="Attach a function to be executed before an Ajax request is sent. This is an Ajax Event." href="http://api.jquery.com/ajaxSend/">.ajaxSend()</a></li>
							<li><a class="v1-0" title="Register a handler to be called when the first Ajax request begins. This is an Ajax Event." href="http://api.jquery.com/ajaxStart/">.ajaxStart()</a></li>
							<li><a class="v1-0" title="Register a handler to be called when all Ajax requests have completed. This is an Ajax Event." href="http://api.jquery.com/ajaxStop/">.ajaxStop()</a></li>
							<li><a class="v1-0" title="Attach a function to be executed whenever an Ajax request completes successfully. This is an Ajax Event." href="http://api.jquery.com/ajaxSuccess/">.ajaxSuccess()</a></li>
						</ul>
					</section>
					
					<section>
						<h2>Helper Functions</h2>
						<ul>
							<li><a class="v1-2" title="Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request." href="http://api.jquery.com/jQuery.param/">jQuery.param()</a></li>
							<li><a class="v1-0" title="Encode a set of form elements as a string for submission." href="http://api.jquery.com/serialize/">.serialize()</a></li>
							<li><a class="v1-2" title="Encode a set of form elements as an array of names and values." href="http://api.jquery.com/serializeArray/">.serializeArray()</a></li>
						</ul>
					</section>

					<section>
						<h2>Low-Level Interface</h2>
						<ul>
							<li><a class="v1-0" title="Perform an asynchronous HTTP (Ajax) request." href="http://api.jquery.com/jQuery.ajax/">jQuery.ajax()</a></li>
							<li><a class="v1-1" title="Set default values for future Ajax requests." href="http://api.jquery.com/jQuery.ajaxSetup">jQuery.ajaxSetup()</a></li>
						</ul>
					</section>
					
					<section>
						<h2>Shorthand Methods</h2>
						<ul>
							<li><a class="v1-0" title="Load data from the server using a HTTP GET request." href="http://api.jquery.com/jQuery.get/">jQuery.get()</a></li>
							<li><a class="v1-0" title="Load JSON-encoded data from the server using a GET HTTP request." href="http://api.jquery.com/jQuery.getJSON/">jQuery.getJSON()</a></li>
							<li><a class="v1-0" title="Load a JavaScript file from the server using a GET HTTP request, then execute it." href="http://api.jquery.com/jQuery.getScript/">jQuery.getScript()</a></li>
							<li><a class="v1-0" title="Load data from the server and place the returned HTML into the matched element." href="http://api.jquery.com/load/">.load()</a></li>
							<li><a class="v1-0" title="Load data from the server using a HTTP POST request." href="http://api.jquery.com/jQuery.post/">jQuery.post()</a></li>
						</ul>
					</section>
				</div>
			</article><article id="core">
				<h1>Core</h1>

				<div>
					<section>
						<h2>jQuery Object</h2>
						<ul>
							<li><a class="v1-0" title="Return a collection of matched elements either found in the DOM based on passed argument(s) or created by passing an HTML string." href="http://api.jquery.com/jQuery/">jQuery()</a></li>
							<li><a class="v1-0" title="Relinquish jQuery&#39;s control of the $ variable." href="http://api.jquery.com/jQuery.noConflict/">jQuery.noConflict()</a></li>
							<li><a class="v1-5 v1-7-d v1-9-r removed old-version" title="Creates a new copy of jQuery whose properties and methods can be modified without affecting the original jQuery object." href="http://api.jquery.com/jQuery.sub/">jQuery.sub()</a></li>
							<li><a class="v1-5" title="Provides a way to execute callback functions based on one or more objects, usually Deferred objects that represent asynchronous events." href="http://api.jquery.com/jQuery.when/">jQuery.when()</a></li>
						</ul>
					</section>
					
					<section>
						<h2>Utilities</h2>
						<ul>
							<li><a class="v1-0 v1-3-d old-version" title="States if the current page, in the user&#39;s browser, is being rendered using the W3C CSS Box Model." href="http://api.jquery.com/jQuery.boxModel/">jQuery.boxModel</a></li>
							<li><a class="v1-0 v1-3-d v1-9-r removed old-version" title="Contains flags for the useragent, read from navigator.userAgent. We recommend against using this property; please try to use feature detection instead (see jQuery.support). jQuery.browser may be moved to a plugin in a future release of jQuery." href="http://api.jquery.com/jQuery.browser/">jQuery.browser</a></li>
							<li><a class="v1-4" title="Check to see if a DOM node is within another DOM node." href="http://api.jquery.com/jQuery.contains/">jQuery.contains()</a></li>
							<li><a class="v1-0" title="A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function&#39;s arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties." href="http://api.jquery.com/jQuery.each/">jQuery.each()</a></li>
							<li><a class="v1-0" title="Merge the contents of two or more objects together into the first object." href="http://api.jquery.com/jQuery.extend/">jQuery.extend()</a></li>
							<li><a class="v1-0-4" title="Execute some JavaScript code globally." href="http://api.jquery.com/jQuery.globalEval/">jQuery.globalEval()</a></li>
							<li><a class="v1-0" title="Finds the elements of an array which satisfy a filter function. The original array is not affected." href="http://api.jquery.com/jQuery.grep/">jQuery.grep()</a></li>
							<li><a class="v1-2" title="Search for a specified value within an array and return its index (or -1 if not found)." href="http://api.jquery.com/jQuery.inArray/">jQuery.inArray()</a></li>
							<li><a class="v1-3" title="Determine whether the argument is an array." href="http://api.jquery.com/jQuery.isArray/">jQuery.isArray()</a></li>
							<li><a class="v1-4" title="Check to see if an object is empty (contains no properties)." href="http://api.jquery.com/jQuery.isEmptyObject/">jQuery.isEmptyObject()</a></li>
							<li><a class="v1-2" title="Determine if the argument passed is a Javascript function object." href="http://api.jquery.com/jQuery.isFunction/">jQuery.isFunction()</a></li>
							<li><a class="v1-7" title="Determines whether its argument is a number." href="http://api.jquery.com/jQuery.isNumeric/">jQuery.isNumeric()</a></li>
							<li><a class="v1-4" title="Check to see if an object is a plain object (created using &#39;{}&#39; or &#39;new Object&#39;)." href="http://api.jquery.com/jQuery.isPlainObject/">jQuery.isPlainObject()</a></li>
							<li><a class="v1-4-3" title="Determine whether the argument is a window." href="http://api.jquery.com/jQuery.isWindow/">jQuery.isWindow()</a></li>
							<li><a class="v1-1-4" title="Check to see if a DOM node is within an XML document (or is an XML document)." href="http://api.jquery.com/jQuery.isXMLDoc/">jQuery.isXMLDoc()</a></li>
							<li><a class="v1-2" title="Convert an array-like object into a true JavaScript array." href="http://api.jquery.com/jQuery.makeArray/">jQuery.makeArray()</a></li>
							<li><a class="v1-0" title="Translate all items in an array or array-like object to another array of items." href="http://api.jquery.com/jQuery.map/">jQuery.map()</a></li>
							<li><a class="v1-0" title="Merge the contents of two arrays together into the first array. " href="http://api.jquery.com/jQuery.merge/">jQuery.merge()</a></li>
							<li><a class="v1-4" title="An empty function." href="http://api.jquery.com/jQuery.noop/">jQuery.noop()</a></li>
							<li><a class="v1-4-3" title="Return a number representing the current time." href="http://api.jquery.com/jQuery.now/">jQuery.now()</a></li>
							<li><a class="v1-8" title="Parses a string into an array of DOM nodes." href="http://api.jquery.com/jQuery.parseHTML/">jQuery.parseHTML()</a></li>
							<li><a class="v1-4-1" title="Takes a well-formed JSON string and returns the resulting JavaScript object." href="http://api.jquery.com/jQuery.parseJSON/">jQuery.parseJSON()</a></li>
							<li><a class="v1-5" title="Parses a string into an XML document." href="http://api.jquery.com/jQuery.parseXML/">jQuery.parseXML()</a></li>
							<li><a class="v1-4" title="Takes a function and returns a new one that will always have a particular context." href="http://api.jquery.com/jQuery.proxy/">jQuery.proxy()</a></li>
							<li><a class="v1-3" title="A collection of properties that represent the presence of different browser features or bugs." href="http://api.jquery.com/jQuery.support/">jQuery.support</a></li>
							<li><a class="v1-0" title="Remove the whitespace from the beginning and end of a string." href="http://api.jquery.com/jQuery.trim/">jQuery.trim()</a></li>
							<li><a class="v1-4-3" title="Determine the internal JavaScript [[Class]] of an object." href="http://api.jquery.com/jQuery.type/">jQuery.type()</a></li>
							<li><a class="v1-1-3" title="Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers." href="http://api.jquery.com/jQuery.unique/">jQuery.unique()</a></li>
						</ul>
					</section>
				</div>
				<div>
					<section>
						<h2>DOM Element Methods</h2>
						<ul>
							<li><a class="v1-0" title="Retrieve the DOM elements matched by the jQuery object." href="http://api.jquery.com/get/">.get()</a></li>
							<li><a class="v1-0" title="Search for a given element from among the matched elements." href="http://api.jquery.com/index/">.index()</a></li>
							<li><a class="v1-0 v1-8-d old-version" title="Return the number of elements in the jQuery object." href="http://api.jquery.com/size/">.size()</a></li>
							<li><a class="v1-4" title="Retrieve all the DOM elements contained in the jQuery set, as an array." href="http://api.jquery.com/toArray/">.toArray()</a></li>
						</ul>
					</section>

					<section>
						<h2>Internals</h2>
						<ul>
							<li><a class="v1-0" title="A string containing the jQuery version number." href="http://api.jquery.com/jquery-2/">.jquery</a></li>
							<li><a class="v1-3" title="The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document." href="http://api.jquery.com/context/">.context</a></li>
							<li><a class="v1-4-1" title="Takes a string and throws an exception containing it." href="http://api.jquery.com/jQuery.error/">jQuery.error()</a></li>
							<li><a class="v1-0" title="The number of elements in the jQuery object." href="http://api.jquery.com/length/">.length</a></li>
							<li><a class="v1-0" title="Add a collection of DOM elements onto the jQuery stack." href="http://api.jquery.com/pushStack/">.pushStack()</a></li>
							<li><a class="v1-3" title="A selector representing selector originally passed to jQuery()." href="http://api.jquery.com/selector/">.selector</a></li>
						</ul>
					</section>
					
					<section>
						<h2>Deferred Object</h2>
						<ul>
							<li><a class="v1-6" title="Add handlers to be called when the Deferred object is either resolved or rejected." href="http://api.jquery.com/deferred.always/">deferred.always()</a></li>
							<li><a class="v1-5" title="Add handlers to be called when the Deferred object is resolved." href="http://api.jquery.com/deferred.done/">deferred.done()</a></li>
							<li><a class="v1-5" title="Add handlers to be called when the Deferred object is rejected." href="http://api.jquery.com/deferred.fail/">deferred.fail()</a></li>
							<li><a class="v1-5 v1-7-d v1-8-r removed old-version" title="Determine whether a Deferred object has been rejected." href="http://api.jquery.com/deferred.isRejected/">deferred.isRejected()</a></li>
							<li><a class="v1-5 v1-7-d v1-8-r removed old-version" title="Determine whether a Deferred object has been resolved." href="http://api.jquery.com/deferred.isResolved/">deferred.isResolved()</a></li>
							<li><a class="v1-7" title="Call the progressCallbacks on a Deferred object with the given args." href="http://api.jquery.com/deferred.notify/">deferred.notify()</a></li>
							<li><a class="v1-7" title="Call the progressCallbacks on a Deferred object with the given context and args." href="http://api.jquery.com/deferred.notifyWith/">deferred.notifyWith()</a></li>
							<li><a class="v1-6 v1-8-d old-version" title="Utility method to filter and/or chain Deferreds." href="http://api.jquery.com/deferred.pipe/">deferred.pipe()</a></li>
							<li><a class="v1-7" title="Add handlers to be called when the Deferred object generates progress notifications." href="http://api.jquery.com/deferred.progress/">deferred.progress()</a></li>
							<li><a class="v1-5" title="Return a Deferred&#39;s Promise object." href="http://api.jquery.com/deferred.promise/">deferred.promise()</a></li>
							<li><a class="v1-5" title="Reject a Deferred object and call any failCallbacks with the given args." href="http://api.jquery.com/deferred.reject/">deferred.reject()</a></li>
							<li><a class="v1-5" title="Reject a Deferred object and call any failCallbacks with the given context and args." href="http://api.jquery.com/deferred.rejectWith/">deferred.rejectWith()</a></li>
							<li><a class="v1-5" title="Resolve a Deferred object and call any doneCallbacks with the given args." href="http://api.jquery.com/deferred.resolve/">deferred.resolve()</a></li>
							<li><a class="v1-5" title="Resolve a Deferred object and call any doneCallbacks with the given context and args." href="http://api.jquery.com/deferred.resolveWith/">deferred.resolveWith()</a></li>
							<li><a class="v1-7" title="Determine the current state of a Deferred object." href="http://api.jquery.com/deferred.state/">deferred.state()</a></li>
							<li><a class="v1-5" title="Add handlers to be called when the Deferred object is resolved or rejected." href="http://api.jquery.com/deferred.then/">deferred.then()</a></li>
							<li><a class="v1-6" title="Return a Promise object to observe when all actions of a certain type bound to the collection, queued or not, have finished." href="http://api.jquery.com/promise/">.promise()</a></li>
						</ul>
					</section>
				</div>
				<div>
					<section>
						<h2>Callbacks Object</h2>
						<ul>
							<li><a class="v1-7" title="A multi-purpose callbacks list object that provides a powerful way to manage callback lists." href="http://api.jquery.com/jQuery.Callbacks/">jQuery.Callbacks()</a></li>
							<li><a class="v1-7" title="Add a callback or a collection of callbacks to a callback list." href="http://api.jquery.com/callbacks.add/">callbacks.add()</a></li>
							<li><a class="v1-7" title="Disable a callback list from doing anything more." href="http://api.jquery.com/callbacks.disable/">callbacks.disable()</a></li>
							<li><a class="v1-7" title="Remove all of the callbacks from a list." href="http://api.jquery.com/callbacks.empty/">callbacks.empty()</a></li>
							<li><a class="v1-7" title="Call all of the callbacks with the given arguments." href="http://api.jquery.com/callbacks.fire/">callbacks.fire()</a></li>
							<li><a class="v1-7" title="Determine if the callbacks have already been called at least once." href="http://api.jquery.com/callbacks.fired/">callbacks.fired()</a></li>
							<li><a class="v1-7" title="Call all callbacks in a list with the given context and arguments." href="http://api.jquery.com/callbacks.fireWith/">callbacks.fireWith()</a></li>
							<li><a class="v1-7" title="Determine whether a supplied callback is in a list." href="http://api.jquery.com/callbacks.has/">callbacks.has()</a></li>
							<li><a class="v1-7" title="Lock a callback list in its current state." href="http://api.jquery.com/callbacks.lock/">callbacks.lock()</a></li>
							<li><a class="v1-7" title="Determine if the callbacks list has been locked." href="http://api.jquery.com/callbacks.locked/">callbacks.locked()</a></li>
							<li><a class="v1-7" title="Remove a callback or a collection of callbacks from a callback list." href="http://api.jquery.com/callbacks.remove/">callbacks.remove()</a></li>
						</ul>
					</section>
				</div>
			</article>
		</div>
		<div>
					Khóa học lập trình PHP của ZendVN là một khóa học
					<a link="http://laptrinhweb.org/series-bai-viet/tu-hoc-lap-trinh-php/" title="Tu hoc lap trinh PHP Online">tự học lập trình PHP Online</a>. 
					Khóa học PHP này cung cấp cho các bạn kiến thức về lập trình PHP từ căn bản đến nâng cao. 
					Các bạn sẽ tự học PHP thông qua các video mà ZendVN đã xây dựng sẵn theo giáo trình PHP của ZendVN biên soạn. 
 
				ZendVN bảo đảm đây là một trong những khóa học PHP có chất lượng tốt nhất hiện nay ở Việt Nam. 
				Khóa học PHP này được dựa trên những kinh nghiệm thực tế trong quá trình làm việc của ZendVN với các dự án lớn của nước ngoài.
 
			Một câu hỏi đặt ra là: “Tại sao lại học lập trình web PHP mà không phải ngôn ngữ lập trình web khác”. 
			Câu trả lời là “PHP là một ngôn ngữ lập trình web thông dụng nhất hiện nay, 
			các website có nền tảng là ngôn ngữ PHP chiếm hơn 70% tổng các website trên toàn thế giới. 
			Hơn nữa hiện nay có rất nhiều bộ mã nguồn mở hoàn toàn miễn được lập trình bằng PHP như: 
			<a link="http://laptrinhweb.org/category/wordpress/lap-trinh-wordpress/" title="Huong dan lap trinh WordPress toan tap"> lập trình Wordpress</a>
			, Joomla, Drupal… 
			Các bạn có thể download các bộ mã nguồn mở này và xây dựng các website một cách nhanh chóng…”. 
			Ngoài ra còn rất nhiều lý do chúng ta nên học PHP thay vì các ngôn ngữ khác nếu bạn nào muốn có 
			câu trả lời toàn diện hãy đặt câu hỏi trong forum của ZendVN.
			
			
		</div>	
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-11600391-1");
pageTracker._trackPageview();
} catch(err) {}</script>
	
	

<ul class="ui-autocomplete ui-menu ui-widget ui-widget-content ui-corner-all" role="listbox" aria-activedescendant="ui-active-menuitem" style="z-index: 3; top: 0px; left: 0px; display: none;"></ul><div class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable" tabindex="-1" role="dialog" aria-labelledby="ui-dialog-title-settings" style="display: none; z-index: 1000; outline: 0px; position: absolute;"><div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"><span class="ui-dialog-title" id="ui-dialog-title-settings">Settings</span><a href="http://oscarotero.com/jquery/#" class="ui-dialog-titlebar-close ui-corner-all" role="button"><span class="ui-icon ui-icon-closethick">close</span></a></div><div id="settings" class="ui-dialog-content ui-widget-content">
			<fieldset>
				<strong>Open links:</strong>
				<label><input type="radio" name="open_links" value="modal-window"> Modal window</label><br>
				<label><input type="radio" name="open_links" value="new-window"> New window</label><br>
				<label><input type="radio" name="open_links" value="same-window"> Same window</label>
			</fieldset>

			<fieldset>
				<strong>Theme:</strong>
				<select id="theme">
					<option value="css/colorfull.css">Colorfull</option>
					<option value="css/jquery.css">jQuery</option>
				</select>
			</fieldset>

			<p><a rel="license" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons License">Creative Commons</a> | by <a href="http://twitter.com/misteroom">@misteroom</a></p>
		</div><div class="ui-resizable-handle ui-resizable-n"></div><div class="ui-resizable-handle ui-resizable-e"></div><div class="ui-resizable-handle ui-resizable-s"></div><div class="ui-resizable-handle ui-resizable-w"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se ui-icon-grip-diagonal-se" style="z-index: 1001;"></div><div class="ui-resizable-handle ui-resizable-sw" style="z-index: 1002;"></div><div class="ui-resizable-handle ui-resizable-ne" style="z-index: 1003;"></div><div class="ui-resizable-handle ui-resizable-nw" style="z-index: 1004;"></div></div><div class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable" tabindex="-1" role="dialog" aria-labelledby="ui-dialog-title-modal" style="display: none; z-index: 1002; outline: 0px; position: absolute; height: auto; width: 1249px; top: 89px; left: 428px;"><div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"><span class="ui-dialog-title" id="ui-dialog-title-modal">.delegate()</span><a href="http://oscarotero.com/jquery/#" class="ui-dialog-titlebar-close ui-corner-all" role="button"><span class="ui-icon ui-icon-closethick">close</span></a></div><div id="modal" class="ui-dialog-content ui-widget-content" scrolltop="0" scrollleft="0" style="width: auto; min-height: 0px; height: 507.375px;">
			<iframe src="iframe.htm"></iframe>
		</div><div class="ui-resizable-handle ui-resizable-n"></div><div class="ui-resizable-handle ui-resizable-e"></div><div class="ui-resizable-handle ui-resizable-s"></div><div class="ui-resizable-handle ui-resizable-w"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se ui-icon-grip-diagonal-se" style="z-index: 1001;"></div><div class="ui-resizable-handle ui-resizable-sw" style="z-index: 1002;"></div><div class="ui-resizable-handle ui-resizable-ne" style="z-index: 1003;"></div><div class="ui-resizable-handle ui-resizable-nw" style="z-index: 1004;"></div></div></body></html>