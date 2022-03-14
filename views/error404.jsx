const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
            <div>
                <img src="public\Images\error-dog.jpg" alt="Error Dog" />
            <div>
            Photo by <a href="https://www.pexels.com/@anntarazevich">Anna Tarazevich</a>  from <a href="https://www.pexels.com">Pexels</a>
            </div>
            </div>
          </main>
      </Def>
    )
  }

module.exports = error404