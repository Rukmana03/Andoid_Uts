import { View, Text } from 'react-native';
import React from 'react';
import { Link, Redirect } from 'expo-router';
import { useUser } from '@clerk/clerk-expo';

export default function Index() {
  const { user } = useUser();

  // Jika pengguna tidak terautentikasi, arahkan ke halaman login
  if (!user) {
    return <Redirect href="/login" />;
  }

  // Jika pengguna terautentikasi, arahkan ke tab /home
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Welcome, {user?.fullName}!</Text>

      {/* Contoh Link untuk berpindah ke tab lain */}
      <Link href="/(tabs)/settings">
        <Text style={{ color: 'blue', marginTop: 20 }}>Go to Settings Tab</Text>
      </Link>
    </View>
  );
}
