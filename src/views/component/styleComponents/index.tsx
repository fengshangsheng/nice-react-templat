import { useState } from "react";
import { observer } from "mobx-react-lite";
import { View } from '@/views/component/styleComponents/style';
import { useMobx } from "@/utils/hooks";

function Index() {
  const [count, handleCount] = useState(0);
  const store = useMobx('store');

  return (
    <View>
      <button onClick={() => handleCount(count + 1)}>add+1</button>
    </View>
  );
}

export default observer(Index);
