type ToastType = "success" | "error" | "info";

export function useToast() {
  const toasts = useState<{ id: number; message: string; type: ToastType }[]>(
    "toasts",
    () => [],
  );

  function show(message: string, type: ToastType = "success") {
    const id = Date.now();
    toasts.value.push({ id, message, type });

    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== id);
    }, 3000);
  }

  return { toasts, show };
}
