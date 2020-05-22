#!/bin/bash

nx g @nrwl/react:lib ui $@
nx g @nrwl/react:lib logic $@
nx g @nrwl/workspace:lib state $@
nx g @nrwl/workspace:lib service $@