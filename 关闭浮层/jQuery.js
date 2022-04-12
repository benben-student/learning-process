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
    console.log('show')
    setTimeout(function(){
        console.log('添加 one click')
        $(document).one('click',function(){
            console.log('我觉得这里不会执行')
            console.log('hide')
            $(popover).hide()
        })
    },0)
  
})
