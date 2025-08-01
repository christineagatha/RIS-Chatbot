// Mermaid diagram definition
// const validationDiagram = `
// graph TB
//     %% Title node
//     validationTitle["<b>Validation Flow</b>"]:::title

//     %% Define styles
//     classDef title fill:#ffffff,stroke:none,font-size:24px
//     classDef model fill:#fce4ec,stroke:#880e4f,stroke-width:2px
//     classDef validation fill:#e0f2f1,stroke:#004d40,stroke-width:2px
//     classDef interface fill:#fff3e0,stroke:#e65100,stroke-width:2px

//     %% Nodes
//     ReasoningModel["Reasoning Model"]:::model
//     Validator["Validator"]:::validation
//     WebServer["Web Server"]:::interface
//     LLM["LLM"]:::model

//     %% Flow
//     validationTitle --> ReasoningModel
//     ReasoningModel -->|Generates test questions| Validator
//     Validator -->|Injects test queries| WebServer
//     WebServer -.->|Responses| Validator
//     Validator -.->|Accuracy Feedback| LLM
// `;
const validationDiagram = `
graph TB
    %% Define styles
    classDef model fill:#fce4ec,stroke:#880e4f,stroke-width:2px
    classDef validation fill:#e0f2f1,stroke:#004d40,stroke-width:2px
    classDef interface fill:#fff3e0,stroke:#e65100,stroke-width:2px

    %% Nodes
    Reasoning["Reasoning Model - Question Generator"]:::model
    Validator["Validator - Quality Assurance"]:::validation
    RISChatbot["RIS Chatbot"]:::interface

    %% Flow
    Reasoning -->|Test questions| Validator
    Validator -->|Test queries| RISChatbot
    RISChatbot -.->|Responses| Validator
    Validator -.->|Accuracy feedback| Reasoning
`;


// Function to render the diagram
function renderDiagram(containerId = 'mermaid-diagram') {
  if (typeof mermaid === 'undefined') {
    console.error('Mermaid library not loaded');
    return;
  }

  mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    flowchart: {
      htmlLabels: true,
      curve: 'linear'
    },
    securityLevel: 'loose'
  });

  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id '${containerId}' not found`);
    return;
  }

  const diagramId = 'diagram-' + Math.random().toString(36).substr(2, 9);

  mermaid.render(diagramId, validationDiagram)
    .then(({ svg }) => {
      container.innerHTML = svg;
    })
    .catch(error => {
      console.error('Error rendering diagram:', error);
      container.innerHTML = '<p>Error rendering diagram</p>';
    });
}
