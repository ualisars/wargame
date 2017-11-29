import {
  isObjectInArray,
  deleteObjectFromArray
} from '../../../utils/objUtils';

class NodeStore {
  store:any[] = [];

  addNodeToStore(node:any) {
    if(node) {
      if(!isObjectInArray(node, this.store)) { // object is not inside array
        this.store.push(node);
      }
    }
  }

  removeNodeFromStore(node:any) {
    if(node) {
      if(isObjectInArray(node, this.store)) { // object is inside array
        this.store = deleteObjectFromArray(node, this.store);
      }
    }
  }

  clearStore() {
    this.store = [];
  }
}

// export default NodeStore;
