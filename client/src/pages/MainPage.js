import React from 'react'
import Search from '../components/TextInput'
import Card from '../components/Card'

export default () => {
  return (
    <div className="home content-wrapper flex-col">
      <div className="content flex-col">
        <form>
          <Search name="search" type="search" placeholder="Find New Places" />
        </form>
        <div className="discover flex-col">
          <h2>Discover</h2>
          <h4>Trending</h4>
          <section className="card-wrapper flex-row">
            <Card>
              <div className="mask flex-col">
                <div className="card-content">
                  <h3>Grand Canyon</h3>
                  <p>Waterfall in the grand canyon!</p>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1502375751885-4f494926ce5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                alt="gc"
              />
            </Card>
            <Card>
              <div className="mask flex-col">
                <div className="card-content">
                  <h3>San Francisco</h3>
                  <p>Tram in Sf!</p>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1534050359320-02900022671e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                alt="sf"
              />
            </Card>
            <Card>
              <div className="mask flex-col">
                <div className="card-content">
                  <h3>Tokyo</h3>
                  <p>I wear my sunglasses at night!</p>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                alt="sf"
              />
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
