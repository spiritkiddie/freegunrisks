
const contact = $('<span class="address">'+
                    '<div class="addr-header">'+
                      '<div class="map" id="map"></div>'+
                    '</div>'+
                    '<div class="addr-info">'+
                        '<div class="addr-info-inner">'+
                          '<div class="addr-title">'+
                            '<h5>CONTACT US HERE</h5>'+
                          '</div>'+
                          '<div class="row no-marging">'+
                            '<div class="col-md-6">'+
                              '<span class="location add-loc">'+
                                '<i class="fa fa-map-marker" aria-hidden="true"></i>'+
                                'Fregun  Risk Advisors<br>'+
                                'Bartningallee 16<br>'+
                                '10557 Berlin. Germany' +
                              '</span>'+
                              '<span class="phone add-loc">'+
                                '<i class="fa fa-phone" aria-hidden="true"></i>'+
                                '+49(0)15236662364'+
                              '</span>'+
                            '</div>'+
                            '<div class="col-md-6">'+
                              '<span class="location add-loc">'+
                                '<i class="fa fa-map-marker" aria-hidden="true"></i>'+
                                'Fregun Risk Advisors Ltd<br>'+
                                'P.O.BOX GP 18141 <br>' +
                                'Accra,Ghana'+
                              '</span>'+
                              '<span class="phone add-loc">'+
                                '<i class="fa fa-phone" aria-hidden="true"></i>'+
                                '+233-209849859'+
                              '</span>'+
                            '</div>'+
                            '<div class="col-md-12">'+
                              '<div class="mail add-loc">'+
                                '<i class="fa fa-envelope" aria-hidden="true"></i>'+
                                'Info@fregunriskadvisors.com'+
                              '</div>'+
                            '</div>'+
                            '<a href="#0" class="findMe"><i class="fa fa-map" aria-hidden="true"></i>  Find Me!</a>'+
                          '</div>'+
                        '</div>'+
                    '</div>'+
                  '</span>' );
$('.contact').append(contact);

$('.vegas-1').vegas({
		delay: 8000,
		shuffle: true,
		preload: true,
		animation: 'kenbern',
		transitionDuration: 300,
		timer: false,
		//overlay: 'jscript/overlays/05.png',
		transition: [ 'fade' ],
				 slides: [
					 {src: "images/vegas-1.jpg"},
					 {src: "images/vegas-2.jpg"},
				 ]
});


//send message
const message = $('.message');

$('.msg-header').on('click', 'a', function(event){
    event.preventDefault();
    message.toggleClass('is-showing');
});


$('.riskBottom').on('click', function(event){
    event.preventDefault();
    window.location.href = 'service.html';
    $(document).ready(function(){
        openModal();
    });
});

function openModal() {
    $('#risk-advisory').modal('show');
}

//our services
function setServiceHeader () {
    let serviceItem = $('.service-item');
    let serviceBtn = serviceItem.find('.bottom');
    var modalHeader = $('.modal').find('.modal-header');

    serviceBtn.on('click', function(event){
        event.preventDefault();
        let element = $(this);
        let serviceImage = element.parents(serviceItem).children('img').prop('src');
        modalHeader.css({ background: 'url(' + serviceImage + ') no-repeat center', backgroundSize: 'cover' });
    });
}
    

function TitleBG (element) {
    this.element = element;
    this.image = this.element.children('.title').data('background');
    this.background = this.element.find('.title');

    this.init()
}

TitleBG.prototype.init = function () {
    this.background.css({ background: `url( ${this.image} ) no-repeat center` });
}

$('.page').each(function(){
    let element = $(this);
    let b2 =  new TitleBG(element);
})



//google map
function initMap() {
    let map, infoWindow;
    let location = { lat: 52.5196108, lng: 13.3447162 };
    // Styles a map in night mode.
    map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 15,
        streetViewControl: true,
        mapTypeControl: true,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-100"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 65
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": "50"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-100"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "30"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "40"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#ffff00"
                    },
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -97
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -100
                    }
                ]
            }
        ]
    });

    let marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Our Location!'
    });

    $('.findMe').on('click', function(e){
        e.preventDefault();
        let element = $(this);
        // Note: This example requires that you consent to location sharing when
        // prompted by your browser. If you see the error "The Geolocation service
        // failed.", it means you probably did not give permission for the browser to
        // locate you.

        infoWindow = new google.maps.InfoWindow;
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('Your Location.');
                infoWindow.open(map);
                map.setCenter(pos);
            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                                                        'Error: The Geolocation service failed.' :
                                                        'Error: Your browser doesn\'t support geolocation.');
            infoWindow.open(map);
        }
    });

}
