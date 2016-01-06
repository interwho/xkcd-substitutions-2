replace(document.body);

function replace(node) {
	var child, next;
	switch ( node.nodeType ) {
		case 1: // Element
		case 9: // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) {
				next = child.nextSibling;
				replace(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;
	v = v.replace(/\bdebate\b/g, "dance-off");
	v = v.replace(/\bself driving\b/g, "uncontrollably swerving");
	v = v.replace(/\bpoll\b/g, "psychic reading");
	v = v.replace(/\bcandidate\b/g, "airbender");
	v = v.replace(/\bdrone\b/g, "dog");
	v = v.replace(/\bvows to\b/g, "probably won't");
	v = v.replace(/\bat large\b/g, "very large");
	v = v.replace(/\bsuccessfully\b/g, "suddenly");
	v = v.replace(/\bexpands\b/g, "physically expands");
	v = v.replace(/\bfirst-degree\b/g, "friggen' awful");
	v = v.replace(/\bsecond-degree\b/g, "friggen' awful");
	v = v.replace(/\bthird-degree\b/g, "friggen' awful");
	v = v.replace(/\ban unknown number\b/g, "like hundreds");
	v = v.replace(/\bfront runner\b/g, "blade runner");
	v = v.replace(/\bglobal\b/g, "spherical");
	v = v.replace(/\byears\b/g, "min||utes");
	v = v.replace(/\bminutes\b/g, "years");
	v = v.replace(/\bmin||utes\b/g, "minutes");
	v = v.replace(/\bno indication\b/g, "lots of signs");
	v = v.replace(/\burged restraint by\b/g, "drunkenly egged on");
	v = v.replace(/\bhorsepower\b/g, "tons of horsemeat");
	textNode.nodeValue = v;
}