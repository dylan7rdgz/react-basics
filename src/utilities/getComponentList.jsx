function getComponentList(count = 1, Component) {
    const componentList = [];
    for (let i = 0; i < count; i++) {
        componentList.push(<Component key={i} index={i}/>);
    }
    return componentList;
}

export default getComponentList;