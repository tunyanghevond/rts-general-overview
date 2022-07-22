
import { ChildAsFC } from './Child';

const Parent = () => {

    return <ChildAsFC  solr ='red' bool = {false} handleClick = {() => console.log('Hi there')}>
        aadad
    </ChildAsFC>
}

export default Parent