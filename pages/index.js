import { useState } from "react";
import { Page, CalloutCard, Layout } from "@shopify/polaris";

import { ResourcePicker } from "@shopify/app-bridge-react";

const Index = () => {
  const [openResourcePicker, setOpenResourcePicker] = useState(false);

  const hideResourcePicker = () => setOpenResourcePicker(false);
  const showResourcePicker = () => setOpenResourcePicker(true);

  const handleSelectProduct = async ({ selection }) => {
    // Selected product ID
    // selection[0].id
  };

  return (
    <Page>
      <Layout>
        <Layout.AnnotatedSection
          title="App settings"
          description="Set up the product you want to add to each customer's first order."
        >
          <CalloutCard
            title="Select your thanks product"
            illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
            primaryAction={{
              content: "Select product",
              onAction: showResourcePicker,
            }}
          >
            <p>You have not selected any product yet.</p>
          </CalloutCard>
        </Layout.AnnotatedSection>
      </Layout>

      <ResourcePicker
        resourceType="Product"
        open={openResourcePicker}
        onCancel={hideResourcePicker}
        onSelection={handleSelectProduct}
        allowMultiple={false}
        actionVerb="select"
      />
    </Page>
  );
};

export default Index;