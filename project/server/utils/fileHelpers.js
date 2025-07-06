import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, '../data');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

export const readUsers = () => {
  const filePath = path.join(dataDir, 'users.json');
  if (!fs.existsSync(filePath)) {
    return [];
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

export const writeUsers = (users) => {
  const filePath = path.join(dataDir, 'users.json');
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

export const readProducts = () => {
  const filePath = path.join(dataDir, 'products.json');
  if (!fs.existsSync(filePath)) {
    return [];
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

export const writeProducts = (products) => {
  const filePath = path.join(dataDir, 'products.json');
  fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
};

export const readOrders = () => {
  const filePath = path.join(dataDir, 'orders.json');
  if (!fs.existsSync(filePath)) {
    return [];
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

export const writeOrders = (orders) => {
  const filePath = path.join(dataDir, 'orders.json');
  fs.writeFileSync(filePath, JSON.stringify(orders, null, 2));
};