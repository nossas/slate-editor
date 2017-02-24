#!/bin/bash
regex='^[0-9]+\.[0-9]+\.[0-9]+$'

if [ $# -eq 0 ]; then
  echo "No arguments supplied. Plese, supply an argument like 0.0.1"
else
  if [[ $@ =~ $regex ]]; then
    sed -ie "s/\"version\": \"[0-9]\.[0-9]\.[0-9]\"/\"version\": \"$@\"/g" ./package.json
    # Remove sed temporary file
    rm package.jsone

    # Commit bumped version?
    read -p "Are you want to commit the bumped version immediatelly? (y/n): " option
    if [ "$option" == "y" ]; then
      git commit -a -m "Bumped version number to $@"
    else
      echo "Commit cancelled"
    fi

    # Finish bump
    echo "Done version bump! (;"
  else
    echo "The version argument ($@) is not valid. Plese pass argument with 0.0.0 pattern"
  fi
fi
