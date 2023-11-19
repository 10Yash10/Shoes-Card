//JS file to create gallery images and display functions.
		var dataSetForGalleryImages = {
				"ImagesInGallery": [{
					"GalleryImage": {
						"id": "1",
						"name": "",
						"fileName":"1.jpg"
		
					}
				},
				{
					"GalleryImage": {
						"id": "4",
						"name": "",
						"fileName":"4.jpg"
		
					}
				},
				{
					"GalleryImage": {
						"id": "5",
						"name": "",
						"fileName":"5.jpg"
		
					}
				},
				{
					"GalleryImage": {
						"id": "6",
						"name": "",
						"fileName":"6.jpg"
		
					}
				},
			{
				"GalleryImage": {
					"id": "9",
					"name": "",
					"fileName": "9.jpg"
	
				}
			},
	
{	
				"GalleryImage": {
					"id": "8",
					"name": "",
					"fileName": "8.jpg"
	
				}
			},
	
			{	
				"GalleryImage": 
				{
					"id": "2",
					"name": "",
					"fileName": "2.jpg"
	
				}
			},
			{	
				"GalleryImage": 
				{
					"id": "10",
					"name": "",
					"fileName": "10.jpg"
	
				}
			},
			{	
				"GalleryImage": 
				{
					"id": "11",
					"name": "",
					"fileName": "11.jpg"
	
				}
			},
			{	
				"GalleryImage": 
				{
					"id": "12",
					"name": "",
					"fileName": "12.jpg"
	
				}
			},
			{	
				"GalleryImage": 
				{
					"id": "13",
					"name": "",
					"fileName": "13.jpg"
	
				}
			},
			{	
				"GalleryImage": 
				{
					"id": "14",
					"name": "",
					"fileName": "14.jpg"
	
				}
			},
			{	
				"GalleryImage": 
				{
					"id": "15",
					"name": "",
					"fileName": "15.jpg"
	
				}
			},
			{	
				"GalleryImage": 
				{
					"id": "16",
					"name": "",
					"fileName": "16.jpg"
	
				}
			},
			{	
				"GalleryImage": 
				{
					"id": "17",
					"name": "",
					"fileName": "17.jpg"
	
				}
			},
			{	
				"GalleryImage": 
				{
					"id": "18",
					"name": "",
					"fileName": "18.jpg"
	
				}
			},
			{	
				"GalleryImage": 
				{
					"id": "19",
					"name": "",
					"fileName": "19.jpg"
	
				}
			},
			{	
				"GalleryImage": 
				{
					"id": "20",
					"name": "",
					"fileName": "20.jpg"
	
				}
			},
			{	
				"GalleryImage": 
				{
					"id": "22",
					"name": "",
					"fileName": "22.jpg"
	
				}
			},
			{	
				"GalleryImage": 
				{
					"id": "23",
					"name": "",
					"fileName": "23.jpg"
	
				}
			},
			{	
				"GalleryImage": 
				{
					"id": "24",
					"name": "",
					"fileName": "24.jpg"
	
				}
			}
			,
			{	
				"GalleryImage": 
				{
					"id": "25",
					"name": "",
					"fileName": "25.jpg"
	
				}
			}
			,
			{	
				"GalleryImage": 
				{
					"id": "26",
					"name": "",
					"fileName": "26.jpg"
	
				}
			}
			,
			{	
				"GalleryImage": 
				{
					"id": "27",
					"name": "",
					"fileName": "27.jpg"
	
				}
			}
			,
			{	
				"GalleryImage": 
				{
					"id": "28",
					"name": "",
					"fileName": "28.jpg"
	
				}
			}
			,
			{	
				"GalleryImage": 
				{
					"id": "29",
					"name": "",
					"fileName": "29.jpg"
	
				}
			}
			,
			{	
				"GalleryImage": 
				{
					"id": "30",
					"name": "",
					"fileName": "30.jpg"
	
				}
			}
			,
			{	
				"GalleryImage": 
				{
					"id": "31",
					"name": "",
					"fileName": "31.jpg"
	
				}
			}
			,
			{	
				"GalleryImage": 
				{
					"id": "32",
					"name": "",
					"fileName": "32.jpg"
	
				}
			}
			,
			{	
				"GalleryImage": 
				{
					"id": "33",
					"name": "",
					"fileName": "33.jpg"
	
				}
			}
			,
			{	
				"GalleryImage": 
				{
					"id": "34",
					"name": "",
					"fileName": "34.jpg"
	
				}
			}
			,
			{	
				"GalleryImage": 
				{
					"id": "35",
					"name": "",
					"fileName": "35.jpg"
	
				}
			}
//			,
//			{	
//				"GalleryImage": 
//				{
//					"id": "36",
//					"name": "",
//					"fileName": "36.jpg"
//	
//				}
//			}
//			,
//			{	
//				"GalleryImage": 
//				{
//					"id": "37",
//					"name": "",
//					"fileName": "37.jpg"
//	
//				}
//			}
//			
			
			,
			
			
			
			
	
				]
			}
		jQuery( document ).ready(function() {
			
			//Start Code written by Vivek on 27-04-2023 for looping in gallery images		
			OBJForGalleryImages={};
			OBJForGalleryImages.apply = function(dataSetForGalleryImages){
				$.each(dataSetForGalleryImages,function() {
					$.each(this,function(key,value){
					
					var htmlDataForImageGallery="<div class='col-12 col-lg-3 col-md-4 col-sm-6 mb-3'><a href='#!' class='starting-gallery' data-toggle='modal' data-target='#myModal"+ value.GalleryImage.id +"'>";
                    htmlDataForImageGallery=htmlDataForImageGallery+"<img src='images/GalleryImage/"+value.GalleryImage.fileName+"' alt='graphy-"+ value.GalleryImage.id +"' height='250px' width='100%'></a><div class='modal fade' id='myModal"+ value.GalleryImage.id +"'>";
					htmlDataForImageGallery=htmlDataForImageGallery+"<div class='modal-dialog modal-dialog-centered'><div class='modal-content bg-transparent'><div class='modal-body text-right'>";
                    htmlDataForImageGallery=htmlDataForImageGallery+"<a href='#!' class='anchor-crossmark'><i class='fa-solid fa-xmark' data-dismiss='modal'></i></a>";
                    htmlDataForImageGallery=htmlDataForImageGallery+"<img src='images/GalleryImage/"+value.GalleryImage.fileName+"' alt='graphy-1' height='auto' width='100%'> </div> </div></div></div></div>";
					
					$(".templateClassForGalleryImage").append(htmlDataForImageGallery);
					});
				});
				
			}
			OBJForGalleryImages.apply(dataSetForGalleryImages);
			
		});