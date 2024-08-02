import { Button } from "@/components/ui/button";
import { useItems, useAddItem, useUpdateItem, useDeleteItem } from "@/integrations/supabase";
import { useState } from "react";

const Index = () => {
  const { data: items, isLoading, isError } = useItems();
  const addItem = useAddItem();
  const updateItem = useUpdateItem();
  const deleteItem = useDeleteItem();
  const [newItemName, setNewItemName] = useState("");

  const handleAddItem = () => {
    addItem.mutate({ name: newItemName, size: 1, price: 10.99 });
    setNewItemName("");
  };

  const handleUpdateItem = (id) => {
    updateItem.mutate({ id, name: `Updated ${id}` });
  };

  const handleDeleteItem = (id) => {
    deleteItem.mutate(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching items</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-background">
      <h1 className="text-4xl font-bold mb-4 text-foreground">Item Management</h1>
      
      <div className="mb-4">
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="New item name"
          className="p-2 border rounded mr-2"
        />
        <Button onClick={handleAddItem}>Add Item</Button>
      </div>

      <ul className="w-full max-w-md">
        {items?.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-2 p-2 bg-secondary rounded">
            <span>{item.name}</span>
            <div>
              <Button onClick={() => handleUpdateItem(item.id)} className="mr-2">Update</Button>
              <Button onClick={() => handleDeleteItem(item.id)} variant="destructive">Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;