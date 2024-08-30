export interface ExtraParams {
  page: number;
}

export interface SessionProps {
  user?: {
    name?: string;
    email?: string;
    id?: string;
    token?: string;
  };
}

export interface MaterialsDataProps {
  id: number;
  line_item_name: string;
  store: string;
  runners_name: string;
  amount: number;
  card_number: string;
  transaction_date: string;
}

export interface MaterialsProps {
  material_purchase_list?: {
    current_page?: number;
    data?: MaterialsDataProps[];
    per_page?: number;
    last_page?: number;
    total?: number;
  };
}
