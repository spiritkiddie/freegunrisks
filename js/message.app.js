let msgDiv = $('.message');
let app = $(
    '<div class="msg-header">'+
        '<a href="#0">Send Us Message</a>'+
    '</div>'+
    '<div class="msg-body">'+
        '<form id="sendMail">'+
            '<div class="form-group">'+
            '<label for="name">'+
                '<i class="fa fa-user-o" aria-hidden="true"></i>'+
                '<input type="text" class="form-control" name="name" id="name" placeholder="Name" required>'+
            ' </label>'+
            '</div>'+
            '<div class="form-group">'+
            '<label for="email">'+
                '<i class="fa fa-envelope-o" aria-hidden="true"></i>'+
                '<input type="text" class="form-control" name="email" id="email" placeholder="Email" required>'+
            '</label>'+
            '</div>'+
            '<div class="form-group">'+
            '<label for="subject">'+
                '<i class="fa fa-envelope-open-o" aria-hidden="true"></i>'+
                '<input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>'+
            ' </label>'+
            '</div>'+
            ' <div class="form-group">'+
            '<label for="msg">Your Message</label>'+
            '<textarea class="form-control" name="msg" id="msg" rows="3"></textarea>'+
            '</div>'+
            '<button class="button-blue custom-btn " type="submit" id="btn-submit">'+
            '<span>Send Message</span>'+
            '<div class="spinner"></div>'+
            '</button>'+
        '</form>'+
    '</div>');

    msgDiv.append(app);

    $('#btn-submit').on('click', function(event){
        event.preventDefault();
        let element = $(this);

        let msgBody = $('.msg-body .form-control');
        let senderName = $('.msg-body').find('#name').val();
        let senderEmail = $('.msg-body').find('#email').val();
        let senderSubject = $('.msg-body').find('#subject').val();
        let senderMessage = $('.msg-body').find('textarea[id="msg"]').val();

        if ( !senderName && !senderEmail && !senderSubject && !senderMessage ) {
            msgBody.addClass('danger-returned');
            element.children('span').text('Fill All Space Please!!');
            return;
        }

        $.ajax({
            url: 'sendform.php',
            type: 'POST',
            data: $('#sendMail').serialize(),
            dataType: 'HTML',
            beforeSend: function () {
                element.children('span').fadeOut(300);
                element.children('.spinner').fadeIn(300);
            },
            success: function (data) {
                element.children('span').fadeIn(300).html('Message Sent!!');
                element.children('.spinner').fadeOut(300);

                setTimeout(function(){
                    element.children('span').fadeOut(300);
                }, 12000);

                setTimeout(function(){
                    element.children('span').fadeIn(300).html('Send Message');
                }, 1300);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                element.children('span').html(errorThrown);
                element.children('.spinner').fadeOut(300);
                setTimeout(function(){
                    element.children('span').fadeIn(300).html('Send Message');
                }, 15000);
            }
        });

        $('.msg-body .form-control').val('');
    });
		
    $('.form-control').each(function(){
        let element = $(this);
        element.on('click focus', function(){
            if ( element.hasClass('danger-returned') ) {
                element.on('keypress', function(){
                    element.removeClass('danger-returned');
                element.parents('form').find('button').children('span').text('Send Message');
                });
            }
        });
    });
