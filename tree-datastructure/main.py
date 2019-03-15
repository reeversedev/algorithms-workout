class node:
    def __init__(self, value=None):
        self.value = value
        self.left_child = None
        self.right_child = None


class binary_search_tree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if self.root == None:
            self.root = node(value)
        else:
            self._insert(value, self.root)

    def _insert(self, value, curr_node):
        if value < curr_node.value:
            if curr_node.left_child == None:
                curr_node.left_child = node(value)
            else:
                self._insert(value, curr_node.left_child)
        elif value > curr_node.value:
            if curr_node.right_child == None:
                curr_node.right_child == node(value)
            else:
                self._insert(value, curr_node.right_child)
        else:
            print "Value already in tree!"

    def print_tree(self):
        if self.root != None:
            self._print_tree(self.root)

    def _print_tree(self, curr_node):
        if curr_node != None:
            self._print_tree(curr_node.left_child)
            print str(curr_node.value)
            self._print_tree(curr_node.right_child)


def fill_tree(tree, num_elems=100, max_int=1000):
    from random import randint
    for _ in range(num_elems):
        curr_elem = randint(0, max_int)
        tree.insert(curr_elem)
    return tree


tree = binary_search_tree()
tree = fill_tree(tree)

tree.print_tree()