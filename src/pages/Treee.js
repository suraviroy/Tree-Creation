import React, { useState, useEffect } from 'react';
import './Treee.css';

const TreeNode = ({ value, children, side }) => {
  return (
    <div className={`tree-node ${side}`}>
      {value}
      <div className="children">{children}</div>
    </div>
  );
};

const Tree = ({ tree, side = 'center' }) => {
  const [treeState, setTree] = useState(tree);


  // const [preOrderResult, setPreOrderResult] = useState([]);
  // const [inOrderResult, setInOrderResult] = useState([]);
  // const [postOrderResult, setPostOrderResult] = useState([]);

  useEffect(() => {
    if (!treeState) {
      const root = {
        value: 'Root',
        left: null,
        right: null,
      };
      setTree(root);
    }
  }, [treeState]);


  const addNode = (side) => {
    const newNode = {
      value: `Node ${Math.floor(Math.random() * 100)}`,
      left: null,
      right: null,
    };

    setTree((prevTree) => ({
      ...prevTree,
      [side]: newNode,
    }));
  };



  // const traverseTree = (order, node) => {
  //   if (node) {
  //     if (order === 'pre') setPreOrderResult((prev) => [...prev, node.value]);
  //     traverseTree(order, node.left);
  //     if (order === 'in') setInOrderResult((prev) => [...prev, node.value]);
  //     traverseTree(order, node.right);
  //     if (order === 'post') setPostOrderResult((prev) => [...prev, node.value]);
  //   }
  // };

  // useEffect(() => {
  //   traverseTree('pre', treeState);
  //   traverseTree('in', treeState);
  //   traverseTree('post', treeState);
  // }, [treeState]);


  return (

    <div className="tree-container">

      {treeState && (
        <TreeNode value={treeState.value} side={side}>
          {treeState.left && <Tree tree={treeState.left} side="left" />}
          {treeState.right && <Tree tree={treeState.right} side="right" />}
        </TreeNode>
      )}
      <div className="buttons">
        {(treeState && !treeState.left) && (
          <button className="addButton" onClick={() => addNode('left')}>
            Add Left of {treeState.value}
          </button>
        )}
        {(treeState && !treeState.right) && (
          <button className="addButton" onClick={() => addNode('right')}>
            Add Right of {treeState.value}
          </button>
        )}
      </div>

     
      {/* <div className="traversal-results">
      
        <div>
          <strong>Pre-Order:</strong> {preOrderResult.join(', ')}
        </div>
        <div>
          <strong>In-Order:</strong> {inOrderResult.join(', ')}
        </div>
        <div>
          <strong>Post-Order:</strong> {postOrderResult.join(', ')}
      </div>
        </div> */}

    </div>

  );
};

export default Tree;




