class Title extends React.Component {
    render() {
        return (
            <div className="title-container">
                <p>{this.props.text}</p>
            </div>
        )
    }
}
class PartList extends React.Component {
    state = {
        partType: "Helmet"
    }

    clickPartHandler = partType => {
        this.setState({ partType: partType})
    }
    clickItemHandler = activePart => {
        this.setState({ activePart: activePart})
    }
    render() {
        const item = [
            { id: "p-01", title: "Helmet" },
            { id: "p-02", title: "Armor" },
            { id: "p-03", title: "Weapon" },
        ]
        const options = [
            { id: "o-01", title: "wizard", type: "Helmet" },
            { id: "o-02", title: "wizard", type: "Armor" },
            { id: "o-03", title: "wizard", type: "Weapon" },
            { id: "o-04", title: "warrior", type: "Helmet" },
            { id: "o-05", title: "warrior", type: "Armor" },
            { id: "o-06", title: "warrior", type: "Weapon" },
            { id: "o-07", title: "rogue", type: "Helmet" },
            { id: "o-08", title: "rogue", type: "Armor" },
            { id: "o-09", title: "rogue", type: "Weapon" },
        ]
        return (
            <div className="container">
                <div className="part-list">
                    {item.map((item, key) => (
                        <div className= {`part-item ${this.state.partType === item.title ? "active" : "inactive" }`} key={item.id}  onClick={ () => this.clickPartHandler(item.title)}>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className="part-list">
                    {options.filter(item => item.type === this.state.partType).map((item, key) => (
                        <div className= {`part-item ${this.state.activePart === item.id ? "active" : "inactive" }`} key={item.id} onClick={ () => this.clickItemHandler(item.id)}>
                            <img src={`/assets/${item.title}/${this.state.partType}.png`}/>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
class WarriorGame extends React.Component {
    render() {
        return (
            <div>
                <Title text="Warrior Game" />
                <PartList />
            </div>
        )
    }
}
ReactDOM.render(
    <WarriorGame />,
    document.getElementById("app")
);