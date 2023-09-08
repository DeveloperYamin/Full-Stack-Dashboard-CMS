"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

import Modal from "@/components/modals/Modal";
import { useStoreModal } from "@/hooks/useStoreModal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1),
});

type Props = {};

const StoreModal = (props: Props) => {
  const router = useRouter();
  const storeModal = useStoreModal();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmitHandler = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/stores", values);
      window.location.assign(`/${response.data.id}`);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories."
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitHandler)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="E-Commerce" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end w-full pt-6 space-x-2">
            <Button
              disabled={form.formState.isSubmitting}
              variant="outline"
              onClick={storeModal.onClose}
            >
              Cancel
            </Button>
            <Button disabled={form.formState.isSubmitting} type="submit">
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};

export default StoreModal;
