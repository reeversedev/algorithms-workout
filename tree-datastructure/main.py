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
                curr_node.right_child = node(value)
            else:
                self._insert(value, curr_node.right_child)
        else:
            print("Value already in tree!")

    def print_tree(self):
        if self.root != None:
            self._print_tree(self.root)

    def _print_tree(self, curr_node):
        if curr_node != None:
            self._print_tree(curr_node.left_child)
            print(str(curr_node.value))
            self._print_tree(curr_node.right_child)

    def height(self):
        if self.root != None:
            return self._height(self.root, 0)
        else:
            return 0

    def _height(self, curr_node, curr_height):
        if curr_node == None:
            return curr_height
        left_height = self._height(curr_node.left_child, curr_height+1)
        right_height = self._height(curr_node.right_child, curr_height+1)
        return max(left_height, right_height)

    def search(self, value):
        if self.root != None:
            return self._search(value, self.root)
        else:
            return False

    def _search(self, value, curr_node):
        if value == curr_node.value:
            return True
        elif value < curr_node.value and curr_node.left_child != None:
            return self._search(value, curr_node.left_child)
        elif value > curr_node.value and curr_node.right_child != None:
            return self._search(value, curr_node.right_child)
        return False


def fill_tree(tree, num_elems=100, max_int=1000):
    from random import randint
    for _ in range(num_elems):
        curr_elem = randint(0, max_int)
        tree.insert(curr_elem)
    return tree


tree = binary_search_tree()
# tree = fill_tree(tree)

tree.insert(5)
tree.insert(1)
tree.insert(3)
tree.insert(2)
tree.insert(7)
tree.insert(10)
tree.insert(0)
tree.insert(20)


tree.print_tree()

print("tree height: " + str(tree.height()))

print(tree.search(5))
print(tree.search(0))
