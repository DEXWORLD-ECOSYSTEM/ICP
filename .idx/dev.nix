# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "unstable"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.dfx-ic
    pkgs.rustup
    pkgs.nodejs_20
    pkgs.nodePackages.npm
  ];

  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "rust-lang.rust-analyzer" # For Rust support
      "esbenp.prettier-vscode" # For code formatting
    ];

    # Enable previews
    previews = {
      enable = true;
      previews = {};
    };
# Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        # Install the wasm32-unknown-unknown target for Rust
        rust-target = "rustup target add wasm32-unknown-unknown";
        # Install frontend dependencies
        npm-install = "cd src/dex_blog_frontend && npm install";
      };
      # Runs when the workspace is (re)started)
      onStart = {};
    };
  };
}