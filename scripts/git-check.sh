
exit_unless_valid_branch() {
  BRANCH=$(git rev-parse --abbrev-ref HEAD)
  if [ "$BRANCH" != "$1" ]; then
    echo 'This script can only be run from the develop branche';
    exit 1;
  fi
}

exit_unless_clean_git_folder() {
  if [ -n "$(git status --porcelain)" ]; then
    echo "Please ensure your git folder is clean";
    exit 1;
  fi
}
