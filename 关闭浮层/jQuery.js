// $(clickMe).on('click',function(){
//     $(popover).show()
// })
// $(wrapper).on('click',function(e){
//     e.stopPropagation()
// })
// $(document).on('click',function(){
//     $(popover).hide()
// })

$(clickMe).on('click',function(){
    $(popover).show()
    $(document).one('click',function(){
        console.log('document')
        $(popover).hide()
    })
})
$(wrapper).on('click',function(e){
    e.stopPropagation()
})