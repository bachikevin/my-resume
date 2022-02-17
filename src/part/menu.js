import React from 'react';

export default class Menu extends React.Component {
    constructor() {
        super();
    }
    get Items() {
        return ['自傳', '經歷', '技能'];
    };
    render() {
        return  <ul>
                {this.Items.map((item, i)=> {
                    return <li key={i}>{item}</li>
                })}
                </ul>;
    }
}
