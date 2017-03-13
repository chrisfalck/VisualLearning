let visualArrays = [];

let hue = 0;

function setup() {
	createCanvas(1000, 800);

	colorMode(HSB);

	for (let i = 0; i < 20; ++i) {
		let visualArray = new VisualArray();
		visualArray.createNodes(30, 50, 30 * i + 100, 20, 20);
		visualArrays.push(visualArray);
	}

	frameRate(60);

	background(20);
	
	noStroke();
}

function draw() {

	// Get the nodes from each visualArray into one array.
	let allNodes = _.map(visualArrays, visualArray => {
		return visualArray.getNodes();
	});

	// Flatten the node array so we only have to use one for loop to display nodes.
	let flattenedNodes = _.flatten(allNodes);

	++hue;
	hue %= 360;

	fill(hue, 100, 50);

	for (let i = 0; i < flattenedNodes.length; ++i) {
		flattenedNodes[i].display();
	}

}
