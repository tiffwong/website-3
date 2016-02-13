import React from 'react'
import ReactDOM from 'react-dom'

const email = 'ty' + 'w24' + '@' + 'drexel.edu'

let marquee_items = ['majoring in computer science', 'located in Philadelphia, PA', 'a UX designer']

let Marquee = React.createClass({
    getInitialState() {
        return {
            index: 0
        }
    },

    componentDidMount() {
        setInterval(() => {
            this.setState({
                index: (this.state.index + 1) % this.props.items.length
            })
        }, 1000)
    },

    render() {
        return <div>{this.props.items[this.state.index]}</div>
    }
})

let Main = React.createClass({
    getInitialState() {
        return {
            current_tab: 'About',
            marquee_index: 0,
            input: ''
        }
    },

    tab_content() {
        switch (this.state.current_tab) {
        case 'About':
            return <p>I am currently a third year...</p>
        case 'Projects':
            return <p>TBA</p>
        case 'Resume':
            return <p>My resume</p>
        }
    },

    change_tab(tab) {
        return () => this.setState({ current_tab: tab })
    },

    change(e) {
        this.setState({
            input: e.target.value
        })
    },

    render() {
        let x

        try {
            x = eval(this.state.input)
        } catch (e) {
            x = 'error'
        }

        return <div>
            <Marquee items={['majoring in Computer Science', 'graduating in 2018']}/>
            <a href={"mailto:" + email}>mail</a>
            <ul id="tabs">
                <li><a href="#" onClick={this.change_tab('About')}>About</a></li>
                <li><a href="#" onClick={this.change_tab('Projects')}>Projects</a></li>
                <li><a href="#" onClick={this.change_tab('Resume')}>Resume</a></li>
            </ul>
            <div id="content" style={{textAlign: 'justify'}}>
                {this.tab_content()}
            </div>
            <input type="text" value={this.state.input} onChange={this.change}/>
            <p>{x}</p>
        </div>
    }
})

ReactDOM.render(<Main/>, document.getElementById('main'))

