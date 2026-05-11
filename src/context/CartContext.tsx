import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Product } from "../data/products";
import { businessInfo } from "../data/business";

interface CartItem {
  product: Product;
  variant: { label: string; price: number };
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, variant: { label: string; price: number }, quantity: number) => void;
  removeFromCart: (productId: string, variantLabel: string) => void;
  updateQuantity: (productId: string, variantLabel: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  generateWhatsAppMessage: () => string;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback(
    (product: Product, variant: { label: string; price: number }, quantity: number) => {
      setItems((prev) => {
        const existing = prev.find(
          (item) => item.product.id === product.id && item.variant.label === variant.label
        );
        if (existing) {
          return prev.map((item) =>
            item.product.id === product.id && item.variant.label === variant.label
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }
        return [...prev, { product, variant, quantity }];
      });
      setIsCartOpen(true);
    },
    []
  );

  const removeFromCart = useCallback((productId: string, variantLabel: string) => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.variant.label === variantLabel)
      )
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, variantLabel: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(productId, variantLabel);
        return;
      }
      setItems((prev) =>
        prev.map((item) =>
          item.product.id === productId && item.variant.label === variantLabel
            ? { ...item, quantity }
            : item
        )
      );
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.variant.price * item.quantity,
    0
  );

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const generateWhatsAppMessage = useCallback(() => {
    const phoneNumber = businessInfo.whatsappNumber;
    let message = "Halo Rakik Klarisa! 👋\n\nSaya ingin memesan:\n\n";
    items.forEach((item) => {
      message += `• ${item.product.name} (${item.variant.label}) x${item.quantity} — Rp ${(item.variant.price * item.quantity).toLocaleString("id-ID")}\n`;
    });
    message += `\nTotal: Rp ${totalPrice.toLocaleString("id-ID")}\n\nMohon info ongkir dan total pembayaran ya. Terima kasih! 🙏`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }, [items, totalPrice]);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        openCart,
        closeCart,
        generateWhatsAppMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
