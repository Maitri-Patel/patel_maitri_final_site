import React from 'react';

function DeveloperSetup() {
  return (
    <div>
      <h2>Developer Setup</h2>
      <h3>VSCode Setup</h3>
      <ul>
        <li>Extensions: ESLint for code quality, Prettier for formatting, and Bracket Pair Colorizer.</li>
        <li>Theme: One Dark Pro, which offers a comfortable contrast for long coding sessions.</li>
        <li>Settings: Autosave enabled, Minimap disabled for a cleaner interface.</li>
      </ul>
      <h3>Terminal Setup</h3>
      <ul>
        <li>Shell: Zsh with Oh My Zsh, providing powerful command-line features and plugins.</li>
        <li>Tools: iTerm2 on macOS or Hyper on Windows for better customization and aesthetics.</li>
        <li>Customizations: Using the Powerlevel10k theme for a visually appealing and informative command line.</li>
      </ul>
      <h3>Preferred Editor Font</h3>
      <ul>
        <li>Font: Fira Code, size 14, with ligatures enabled to improve readability and reduce eye strain.</li>
      </ul>
    </div>
  );
}

export default DeveloperSetup;
