const TabContent = (props) => {
  const { active } = props

  const checkActiveTab = (idTab) => {
    let classTab = 'tabcontent '

    if (idTab === active) {
      classTab += 'active'
    }
    return classTab
  }

  return (
    <div className='content'>
      <div className={checkActiveTab('react')}>
        <p>
          <b>React</b> makes it painless to create interactive UIs. Design simple views for each state in your
          application, and React will efficiently update and render just the right components when your data changes
        </p>
      </div>
      <div className={checkActiveTab('vue')}>
        <p>
          <b>Vue</b> (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on
          top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model
          that helps you efficiently develop user interfaces, be it simple or complex.
        </p>
      </div>
      <div className={checkActiveTab('angular')}>
        <p>
          <b>Angular</b> is a development platform, built on TypeScrip With Angular, you're taking advantage of a
          platform that can scale from single-developer projects to enterprise-level applications. Angular is designed
          to make updating as straightforward as possible, so take advantage of the latest developments with a minimum
          of effort. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers,
          library authors, and content creators
        </p>
      </div>

      <div className={checkActiveTab('svelte')}>
        <p>
          <b>Svelte</b> is a radical new approach to building user interfaces. Whereas traditional frameworks like React
          and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens
          when you build your app
        </p>
      </div>
    </div>
  )
}

export default TabContent
