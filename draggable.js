/*!
  * Ender drag and drop
  * license MIT, (c) Dustin Diaz
  * https://github.com/ded/dagron
  */
!function ($) {
  $.ender({
    dagron: function (options) {
      if (options.target) {
        $(options.target)
          .bind('drop', function (e) {
            e.preventDefault()
            options.drop && options.drop(this)
          })
          .bind('dragenter', function (e) {
            options.enter && options.enter(this)
            e.preventDefault()
          })
          .bind('dragover', function (e) {
            e.preventDefault() // allows dropping
            e.dataTransfer.dropEffect = 'link'
          })
          .bind('dragleave', function (e) {
            options.leave && options.leave(this)
          })

      }
      $(this)
        .bind('dragstart', function (e) {
          e.dataTransfer.effectAllowed = 'link'
          e.dataTransfer.setData('Text', this.id)
          options.start && options.start(this)
        })
      options.drag && $(this).bind('drag', function (e) {
        options.drag(this)
      })

      $(this).bind('dragend', function (e) {
        this.draggable = false
      })
      this.forEach(function (el) {
        var $handle = options.handle ? $(el).find(options.handle) : $(el)
        $handle.bind('mousedown', function (e) {
          el.draggable = true
        })
      })
    }
  }, 1)
}(ender)