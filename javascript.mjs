const linkedList = function() {

  let startPoint = null;

  function append(value) {
    if (startPoint == null) startPoint = node(value);
    else {
      let target = traverseToEnd()
      target.nextNode = node(value)
    }
  }

  function prepend(value) {
    let newStart = node(value);
    newStart.nextNode = startPoint
    startPoint = newStart
  }

  function size() {
    let size = 0

    if (startPoint == null) return 0
   
    let target = startPoint;
    while (target.nextNode !== null) {
      size += 1
      target = target.nextNode;
    }
    /* add still one more number to size, because the above loop won't
    count the last node, which has nextNode property of 'null' */
    return size +1
  }
 
  function head() {
    return startPoint
  }


  function tail() {
    return traverseToEnd()
  }

  function at(index) {
    let num = 0
    let target = startPoint;
   
    while (target.nextNode !== null) {
      if (num == index) {
        return target
      } else {
          target = target.nextNode
          num += 1    
      }
    } 
    //check if the last index is the same as num now afer loop is finished
    if (index == num) return target
    else throw new Error('Node not found!')
  }

  function pop() {
    let lastOne = traverseToEnd();
    let target = startPoint;
    while (target.nextNode !== lastOne)
      target = target.nextNode;
    /* when target is the second last one, remove the last element by setting
      the second last elements' nextNode property to 'null' */
    target.nextNode = null;
   
    return startPoint
   
  }

  function contains(value) {
    let target = startPoint;
   
    while (target.nextNode !== null) {
      if (value == target.value) {
        return true
      } else {
          target = target.nextNode   
      }
    } return false
    
  }

  function find(value) {
    let num = 0
    let target = startPoint;
   
    while (target.nextNode !== null) {
      if (target.value == value) {
        return num
      } else {
          target = target.nextNode
          num += 1    
      }
    } 
    //check if the last index is the same as num now afer loop is finished
    if (value == target.value) return target
    else return null
  }

  function toString() {
    /*initiate the returning phrase as an empty string which will be updated
     as we traverse through the linked list */
    let phrase = ''
    
    let target = startPoint;
    while (target.nextNode !== null) {
      phrase = `${phrase} (${target.value}) ->`
      target = target.nextNode;
    }
    
    //and add the last node with its own null value to phrase end
    phrase = `${phrase} (${target.value}) -> (${target.nextNode})`
    return phrase
  }

  function insertAt(value, index) {
    let num = 0
    let target = startPoint
    
    if (index == 0) {
      prepend(value)
      return
    }
   
    let newNode = node(value)
    while (target !== null && target.nextNode !== null) {
      if (num == index) {
        let rightpart = target.nextNode
        newNode.nextNode = rightpart
        target.nextNode = newNode
        break;
       
      } else {
          target = target.nextNode
          num += 1    
      }
    }
  }

  function removeAt(index) {
    let num = 1;
    let target = startPoint;
    
    if (index == 0) {
      startPoint = startPoint.nextNode
      return
    }
    
    while (target !== null && target.nextNode !== null) {
      if (num == index) {
        target.nextNode = target.nextNode.nextNode
        return
      } else {
          target = target.nextNode
          num += 1
        }
    }
  }
 
  function traverseToEnd() {
    let target = startPoint;
    while (target.nextNode !== null) target = target.nextNode;
    return target;
}

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt
  }

}

const node = function(val) {
  let value = val
  let nextNode = null;

  return {value, nextNode}
}

export {linkedList}