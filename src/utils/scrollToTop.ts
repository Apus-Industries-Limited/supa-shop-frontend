

export  const ScrollToTop = (ref:HTMLElement | null):void => {
      if (ref) {
            ref.scrollTo({top:0, behavior:"smooth"})
      }
}