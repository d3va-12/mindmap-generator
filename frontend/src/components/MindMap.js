import ReactFlow, { Background } from "react-flow-renderer";

function MindMap({ mindMapData }) {
  const nodes = [
    {
      id: "central",
      data: { label: mindMapData["Central Idea"] },
      position: { x: 250, y: 5 },
      style: { background: "#3b82f6", color: "white", padding: 10 },
    },
  ];
  const edges = [];

  // Generate nodes and edges for branches
  mindMapData.Branches.forEach((branch, i) => {
    const topicId = `topic-${i}`;
    nodes.push({
      id: topicId,
      data: { label: branch.Topic },
      position: { x: 250 + (i - 1) * 150, y: 100 },
      style: { background: "#10b981", color: "white", padding: 10 },
    });
    edges.push({
      id: `e-central-${topicId}`,
      source: "central",
      target: topicId,
      animated: true,
    });

    // Generate subtopic nodes
    branch.Subtopics.forEach((subtopic, j) => {
      const subtopicId = `subtopic-${i}-${j}`;
      nodes.push({
        id: subtopicId,
        data: { label: subtopic },
        position: { x: 250 + (i - 1) * 150 + (j - 1) * 100, y: 200 },
        style: { background: "#f59e0b", color: "white", padding: 10 },
      });
      edges.push({
        id: `e-${topicId}-${subtopicId}`,
        source: topicId,
        target: subtopicId,
        animated: true,
      });
    });
  });

  return (
    <div style={{ height: 600 }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
      </ReactFlow>
    </div>
  );
}

export default MindMap;