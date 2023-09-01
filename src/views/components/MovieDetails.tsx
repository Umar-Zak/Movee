import {Dialog, Flex, Heading, Button, Text} from "@radix-ui/themes"
import { Movie } from "../../Service/DTOs";

const MovieDetails = (movie: Movie) => {
    return (  
  <Dialog.Root>
  <Dialog.Trigger>
    <Button>View</Button>
  </Dialog.Trigger>
  <Dialog.Content style={{ maxWidth: 450 }}>
    <Dialog.Title>{movie.Title}</Dialog.Title>
    <Dialog.Description size="2" mb="4">
      {movie.Plot}
    </Dialog.Description>
    <Flex direction="column" gap="6">
    <Flex direction="column" gap="2">
    <Heading>Awards</Heading>
    <Text>{movie.Awards}</Text>
    </Flex>
    <Flex direction="column" gap="2">
    <Heading>Director</Heading>
    <Text>{movie.Director}</Text>
    </Flex>
    <Flex direction="column" gap="2">
    <Heading>Country</Heading>
    <Text>{movie.Country}</Text>
    </Flex>
    </Flex>
    <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
        <Button variant="soft" color="gray">
          Done
        </Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
    );
}
 
export default MovieDetails;