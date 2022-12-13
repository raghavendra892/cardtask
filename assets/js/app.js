//alert('hello');

var imgcont = document.getElementById('imgcontainer');

var imgArray = [
	'https://source.unsplash.com/random/?city',
	'https://source.unsplash.com/random/?plant',
	'https://source.unsplash.com/random/?sky',
	'https://source.unsplash.com/random/?books',
	'https://source.unsplash.com/random/?flower',
	'https://source.unsplash.com/random/?food',
	'https://source.unsplash.com/random/?sky',
	'https://source.unsplash.com/random/?nature',
	'https://source.unsplash.com/random/?road',
	'https://source.unsplash.com/random/?inspiration',
	'https://source.unsplash.com/random/?sunset',
	'https://source.unsplash.com/random/?cofee',
	'https://source.unsplash.com/random/?object',
	'https://source.unsplash.com/random/?architecture',
	'https://source.unsplash.com/random/?arts',
	'https://source.unsplash.com/random/?dice',
	'https://source.unsplash.com/random/?text',
	'https://source.unsplash.com/random/?step',
	'https://source.unsplash.com/random/?motorcycle',
	'https://source.unsplash.com/random/?cup',
	'https://source.unsplash.com/random/?lite background',
	
	
	
];

var result = '';
imgArray.forEach(function(img){
	result += `
		<div class="col-sm-4 mb-3">
			<div class="card">
				<div class='card-header'>Image Name</div>
				<div class="card-body">
					<img src="${img}" class="img-fluid">
				</div>
			</div>
		</div>
		
	`;	
})




imgcont.innerHTML = result;
