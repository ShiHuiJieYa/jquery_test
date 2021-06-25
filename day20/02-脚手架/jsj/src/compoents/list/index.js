import React from 'react'
class List extends React.Component {
//   static propTypes = {
//     list: PropTypes.array.isRequired,
//     }
//     //配置默认props
//     static defaultProps = {
//         list: [
//             '应该添加一个list属性',
//             'list属性的值是数组',
//             '数组中存放可以直接渲染的数据'
//         ],
        
//     }
    render() {
      
        return (<div>
            <ul>
                {this.props.list.map((item) => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>)
  }
}
export default List
