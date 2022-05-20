const tabs = document.querySelectorAll('[data-role="tab"]'),
  tabContents = document.querySelectorAll(".tab-panel")

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Tasteful.
    const target = document.querySelector((<any>tab).dataset.target)

    tabContents.forEach(tc => {
      tc.classList.remove("is-active")
    })
    target.classList.add("is-active")

    tabs.forEach(t => {
      t.classList.remove("is-active")
    })
    tab.classList.add("is-active")
  })
})
